import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  meta: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'understanding-transformer',
    tag: 'AI / ML',
    title: 'Understanding Transformers: A Complete Step-by-Step Guide',
    excerpt: 'A deep dive into the architecture that powers modern NLP, from self-attention to positional encodings.',
    meta: 'March 2026 · 10 min read',
  },
  {
    id: 'disease-detection',
    tag: 'AI / ML',
    title: 'How I Built a Disease Detection Model with Less Than 500 Images',
    excerpt: 'Data augmentation, transfer learning, and a few hard-won lessons from training a plant pathology classifier on a tiny dataset.',
    meta: 'Mar 2024 · 6 min read',
  },
  {
    id: 'django-stripe',
    tag: 'Full-Stack',
    title: 'Django + Stripe: The Integration Guide I Wish Existed',
    excerpt: 'A practical walkthrough of handling payments, webhooks, and edge cases.',
    meta: 'Jan 2024 · 8 min read',
  },
];

const BlogSection: React.FC = () => {
  const [lead, ...rest] = blogPosts;

  return (
    <>
      <div className="section-divider"></div>

      <section id="blog">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <h2>Thoughts on<br /><em>tech & craft</em></h2>
          <Link to="/blog" className="btn-ghost">All Posts →</Link>
        </div>

        <div className="blog-list-layout">
          {/* Lead post — more visual weight */}
          <Link to={`/blog/${lead.id}`} className="blog-lead reveal">
            <div className="blog-lead-meta">
              <span className="blog-tag">{lead.tag}</span>
              <span className="blog-meta-text">{lead.meta}</span>
            </div>
            <h3 className="blog-lead-title">{lead.title}</h3>
            <p className="blog-lead-excerpt">{lead.excerpt}</p>
            <span className="blog-read-link">Read article →</span>
          </Link>

          {/* Secondary posts — compact rows */}
          <div className="blog-secondary-list">
            {rest.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog-row reveal">
                <div className="blog-row-left">
                  <span className="blog-tag">{post.tag}</span>
                  <span className="blog-meta-text">{post.meta}</span>
                </div>
                <div className="blog-row-right">
                  <span className="blog-row-title">{post.title}</span>
                  <span className="blog-read-link">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
