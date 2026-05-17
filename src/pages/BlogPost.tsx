import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BLOGS_CONTENT } from '../data/content';
import BlogLayout from '../components/BlogLayout';

const BlogPost: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = BLOGS_CONTENT[id || ""] || BLOGS_CONTENT["disease-detection"];

  return (
    <div className="blog-post-page" style={{ paddingTop: '120px', paddingBottom: '96px' }}>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px 48px' }}>
        <div className="blog-tag" style={{ marginBottom: '16px' }}>{post.tag}</div>
        <h1 style={{
          fontSize: 'clamp(32px, 4.5vw, 60px)',
          lineHeight: 1.08,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '24px',
          fontFamily: 'Bricolage Grotesque, sans-serif',
        }}>
          {post.title}
        </h1>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '13px', color: 'var(--muted)', fontFamily: 'DM Mono, monospace' }}>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginTop: '40px' }} />
      </div>

      <BlogLayout content={post.markdown} basePath={`/blog/${id}`} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px 0', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'DM Mono, monospace' }}>Share</span>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'Twitter / X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}` },
              { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}` },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '11px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em', color: 'var(--muted)', textDecoration: 'none', transition: 'color 220ms cubic-bezier(0.4,0,0.2,1)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
