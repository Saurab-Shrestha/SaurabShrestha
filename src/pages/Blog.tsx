import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS_CONTENT } from '../data/content';
import { useTilt } from '../hooks/useTilt';

const BlogPostItem: React.FC<{ post: any }> = React.memo(({ post }) => {
  const { elementRef, isVisible, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxRotation: 5 });

  return (
    <div
      ref={elementRef}
      className={`blog-post-large reveal grid grid-cols-[auto_1fr] gap-[48px] ${isVisible ? 'visible' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="min-w-[100px]">
        <div className="text-[9px] uppercase tracking-[0.15em] text-[var(--muted)] mt-1.5">{post.date}</div>
      </div>
      <div>
        <div className="blog-tag mb-3">{post.tag}</div>
        <h3 className="blog-title text-[32px] mb-5 leading-[1.2] font-bold">{post.title}</h3>
        <p className="blog-excerpt text-[15px] text-[var(--muted)] mb-8 leading-[1.9] max-w-[850px]">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-5">
          <Link to={`/blog/${post.id}`} className="btn-primary px-6 py-2.5 text-[11px]">Read Full Article</Link>
          <span className="text-[11px] text-[var(--muted)]">{post.readTime}</span>
        </div>
      </div>
    </div>
  );
});

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = Object.values(BLOGS_CONTENT);

  return (
    <div className="blog-page pt-24 pb-24">
      <section className="blog-hero">
        <div className="section-label"><span className="num">04</span> Writing</div>
        <h2>The Engineering <em>Journal</em></h2>
        <p className="blog-subtitle" style={{ color: 'var(--muted)', fontSize: '13px', maxWidth: '500px', marginTop: '16px', lineHeight: 1.8 }}>
          Notes from my desktop. Writing is how I process complex systems and ML architectures.
        </p>
      </section>

      <div className="section-divider" style={{ marginBottom: '40px' }}></div>

      <section className="blog-list">
        <div className="flex flex-col gap-16">
          {posts.map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
