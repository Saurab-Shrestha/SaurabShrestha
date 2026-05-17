import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_CONTENT } from '../data/content';
import BlogLayout from '../components/BlogLayout';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = PROJECTS_CONTENT[id || ""] || PROJECTS_CONTENT["hdes"];

  return (
    <div className="project-detail" style={{ paddingTop: '120px', paddingBottom: '96px' }}>

      {/* ── HERO HEADER ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 48px' }}>
        <Link to="/work" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '11px', color: 'var(--muted)', textDecoration: 'none',
          border: '1px solid var(--border)', padding: '6px 14px',
          letterSpacing: '0.05em', marginBottom: '40px',
          transition: 'color 220ms cubic-bezier(0.4,0,0.2,1), border-color 220ms cubic-bezier(0.4,0,0.2,1)',
        }}>← Back to Work</Link>

        <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px', fontFamily: 'DM Mono, monospace' }}>Case Study</div>
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 72px)',
          lineHeight: 1.05,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '40px',
          fontFamily: 'Bricolage Grotesque, sans-serif',
        }}>
          {project.name}
        </h1>

        {/* Meta row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '48px', justifyContent: 'start' }}>
          {[
            { label: 'Year', value: project.year },
            { label: 'Role', value: project.role },
            { label: 'Stack', value: project.tech.slice(0, 3).join(', ') },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'DM Mono, monospace', marginBottom: '6px' }}>{label}</div>
              <div style={{ fontSize: '14px', color: 'var(--text)', fontFamily: 'DM Mono, monospace' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginTop: '48px' }} />
      </div>

      {/* ── HERO THUMB ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 48px' }}>
        <div style={{
          width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '96px', fontWeight: 800, letterSpacing: '0.05em', borderRadius: '2px',
          background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)',
        }}>
          {project.name.split(' ').map((w: string) => w[0]).join('')}
        </div>
      </div>

      {/* ── ARTICLE BODY + TOC SIDEBAR ── */}
      <BlogLayout content={project.markdown} />

      {/* ── NEXT PROJECT FOOTER ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 40px 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'DM Mono, monospace', marginBottom: '24px' }}>Explore More</p>
        <h3 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '32px', fontFamily: 'Bricolage Grotesque, sans-serif' }}>Next Project →</h3>
        <Link to="/work" className="btn-primary" style={{ padding: '14px 40px' }}>Back to Portfolio</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
