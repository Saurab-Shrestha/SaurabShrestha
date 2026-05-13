import React, { useRef } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import TableOfContents from './TableOfContents';

interface Heading {
  id: string;
  text: string;
  level: 2 | 3 | 4;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function extractHeadings(content: string): Heading[] {
  const lines = content.split('\n');
  const seen = new Map<string, number>();
  const headings: Heading[] = [];

  for (const line of lines) {
    let level: 2 | 3 | 4 | null = null;
    let text = '';

    if (line.startsWith('#### ')) { level = 4; text = line.slice(5).trim(); }
    else if (line.startsWith('### ')) { level = 3; text = line.slice(4).trim(); }
    else if (line.startsWith('## ')) { level = 2; text = line.slice(3).trim(); }

    if (level && text) {
      let slug = slugify(text);
      const count = seen.get(slug) ?? 0;
      if (count > 0) slug = `${slug}-${count}`;
      seen.set(slugify(text), count + 1);
      headings.push({ id: slug, level, text });
    }
  }

  return headings;
}

interface BlogLayoutProps {
  content: string;
  basePath?: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ content, basePath }) => {
  const articleRef = useRef<HTMLDivElement>(null);
  const headings = extractHeadings(content);

  return (
    /*
      The outer div is the "bounding box" for the sticky TOC.
      align-items: stretch ensures both columns stretch to the same height,
      which is what makes the TOC stop at the article bottom.
    */
    <div
      style={{
        display: 'flex',
        gap: '80px',
        alignItems: 'stretch',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
      }}
    >
      {/* ── MAIN ARTICLE ── */}
      <article ref={articleRef} style={{ flex: 1, minWidth: 0 }}>
        <MarkdownRenderer content={content} headings={headings} basePath={basePath} />
        <div style={{ height: '80px' }} />
      </article>

      {/*
        ── TOC COLUMN ──
        This column has the same height as the article (because of align-items: stretch).
        The `aside` inside uses position: sticky so it sticks within THIS column's bounds.
        When you scroll past the column bottom, the `aside` naturally unsticks.
      */}
      <div className="blog-toc-sidebar" style={{ width: '280px', flexShrink: 0, position: 'relative' }}>
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
};

export default BlogLayout;
