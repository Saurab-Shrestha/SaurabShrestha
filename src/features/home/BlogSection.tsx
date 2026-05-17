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
    meta: '10 min read',
  },
  {
    id: 'disease-detection',
    tag: 'AI / ML',
    title: 'How I Built a Disease Detection Model with Less Than 500 Images',
    excerpt: 'Data augmentation, transfer learning, and a few hard-won lessons from training a plant pathology classifier on a tiny dataset.',
    meta: '6 min read',
  },
  {
    id: 'django-stripe',
    tag: 'Full-Stack',
    title: 'Django + Stripe: The Integration Guide I Wish Existed',
    excerpt: 'A practical walkthrough of handling payments, webhooks, and edge cases.',
    meta: '8 min read',
  },
];

const BlogSection: React.FC = () => {
  return (
    <>
      <div className="section-divider"></div>

      <section id="blog">
        <div className="writing-header">
          <div>
            <div className="section-label">
              <span className="num">04</span> Writing
            </div>
            <h2>Notes on<br /><em>building things</em></h2>
            <p className="writing-intro">
              Occasional long-form on the systems I'm building, the dead-ends I learn from, and the parts of the stack I find myself returning to.
            </p>
          </div>
          <Link to="/blog" className="writing-archive-link">
            View archive
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </Link>
        </div>

        <div className="writing-list">
          {blogPosts.map((post, i) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="writing-entry reveal">
              <span className="writing-entry-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="writing-entry-main">
                <h3 className="writing-entry-title">{post.title}</h3>
                <p className="writing-entry-excerpt">{post.excerpt}</p>
              </div>
              <div className="writing-entry-meta">
                <span className="writing-entry-tag">{post.tag}</span>
                <span className="writing-entry-time">{post.meta}</span>
              </div>
              <span className="writing-entry-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
