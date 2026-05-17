import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_CONTENT } from '../data/content';

const PROJECT_THUMBNAILS: Record<string, React.ReactNode> = {
  neuralnoodle: (
    <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="480" height="270" fill="#f5f3f0" />
      <line x1="0" y1="135" x2="480" y2="135" stroke="rgba(30,20,15,0.06)" strokeWidth="1" />
      <line x1="240" y1="0" x2="240" y2="270" stroke="rgba(30,20,15,0.06)" strokeWidth="1" />
      <circle cx="120" cy="80" r="5" fill="rgba(255,92,53,0.9)" />
      <circle cx="240" cy="50" r="5" fill="rgba(255,92,53,0.9)" />
      <circle cx="360" cy="80" r="5" fill="rgba(255,92,53,0.6)" />
      <circle cx="80" cy="155" r="5" fill="rgba(92,232,200,0.8)" />
      <circle cx="200" cy="175" r="5" fill="rgba(92,232,200,0.8)" />
      <circle cx="320" cy="160" r="5" fill="rgba(92,232,200,0.6)" />
      <circle cx="420" cy="145" r="5" fill="rgba(92,232,200,0.5)" />
      <circle cx="240" cy="135" r="10" fill="rgba(255,92,53,0.15)" stroke="rgba(255,92,53,0.7)" strokeWidth="1.5" />
      <line x1="120" y1="80" x2="240" y2="135" stroke="rgba(255,92,53,0.35)" strokeWidth="1" />
      <line x1="240" y1="50" x2="240" y2="125" stroke="rgba(255,92,53,0.45)" strokeWidth="1" />
      <line x1="80" y1="155" x2="230" y2="135" stroke="rgba(92,232,200,0.3)" strokeWidth="1" />
      <line x1="200" y1="175" x2="240" y2="145" stroke="rgba(92,232,200,0.3)" strokeWidth="1" />
      <line x1="360" y1="80" x2="250" y2="135" stroke="rgba(255,184,77,0.4)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="320" y1="160" x2="250" y2="140" stroke="rgba(255,184,77,0.35)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="420" y1="145" x2="250" y2="137" stroke="rgba(255,184,77,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="240" y="134" fontFamily="monospace" fontSize="7" fill="rgba(255,92,53,0.9)" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">H</text>
      <text x="240" y="222" fontFamily="monospace" fontSize="8" fill="rgba(255,92,53,0.4)" letterSpacing="2" textAnchor="middle">EVIDENCE GRAPH</text>
      <text x="370" y="210" fontFamily="monospace" fontSize="7" fill="rgba(255,184,77,0.5)" letterSpacing="1" textAnchor="middle">contradicts</text>
      <text x="110" y="210" fontFamily="monospace" fontSize="7" fill="rgba(92,232,200,0.5)" letterSpacing="1" textAnchor="middle">supports</text>
      <line x1="58" y1="207" x2="76" y2="207" stroke="rgba(92,232,200,0.4)" strokeWidth="1" />
      <line x1="328" y1="207" x2="346" y2="207" stroke="rgba(255,184,77,0.4)" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  ),
  tdd: (
    <img
      src="/assets/tomato.png"
      alt="Tomato Disease Detection — disease analysis interface"
      loading="lazy"
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
    />
  ),
  svufe: (
    <svg
      viewBox="0 0 480 270"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <rect width="480" height="270" fill="#f0ede8" />
      <line x1="0" y1="135" x2="480" y2="135" stroke="rgba(30,20,15,0.07)" strokeWidth="1" />
      <line x1="240" y1="0" x2="240" y2="270" stroke="rgba(30,20,15,0.07)" strokeWidth="1" />
      <polyline
        points="32,160 60,100 88,175 116,85 144,155 172,110 200,165 228,95 240,135"
        fill="none" stroke="rgba(255,92,53,0.6)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="240,135 256,90 284,168 312,88 340,158 368,102 396,162 424,92 452,135"
        fill="none" stroke="rgba(92,232,200,0.5)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <line x1="240" y1="60" x2="240" y2="210" stroke="rgba(30,20,15,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="390" cy="52" r="22" fill="rgba(29,158,117,0.15)" stroke="rgba(92,232,200,0.4)" strokeWidth="1" />
      <polyline points="381,52 388,59 401,45" fill="none" stroke="#5ce8c8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="116" y="218" fontFamily="monospace" fontSize="9" fill="rgba(255,92,53,0.5)" letterSpacing="2" textAnchor="middle">SAMPLE A</text>
      <text x="364" y="218" fontFamily="monospace" fontSize="9" fill="rgba(92,232,200,0.45)" letterSpacing="2" textAnchor="middle">SAMPLE B</text>
      <text x="390" y="88" fontFamily="monospace" fontSize="8" fill="rgba(92,232,200,0.6)" letterSpacing="1.5" textAnchor="middle">MATCH</text>
    </svg>
  ),
};

const WorkItem: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const isReversed = index % 2 === 1;
  const thumbnail = PROJECT_THUMBNAILS[project.id];
  const num = String(index + 1).padStart(2, '0');

  return (
    <Link
      to={`/work/${project.id}`}
      className={`project-row reveal ${isReversed ? 'project-row--reversed' : ''}`}
    >
      <div className="project-row-visual">
        {thumbnail ?? (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: '42px', color: 'var(--muted)'
          }}>
            {project.name.split(' ').map((w: string) => w[0]).join('')}
          </div>
        )}
      </div>
      <div className="project-row-content">
        <div className="project-row-meta">
          <span className="project-row-num">{num}</span>
          <span className="project-row-type">{project.tag}</span>
        </div>
        <h3 className="project-row-name">{project.name}</h3>
        <p className="project-row-desc">{project.desc}</p>
        <div className="project-row-tech">
          {project.tech.map((t: string) => <span key={t} className="tech-badge">{t}</span>)}
        </div>
        <span className="project-row-cta">
          Read case study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13 6 19 12 13 18" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

const Work: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = Object.values(PROJECTS_CONTENT);

  return (
    <section id="projects" className="work-page">
      <div className="projects-header" style={{ marginBottom: '72px' }}>
        <div>
          <div className="section-label"><span className="num">03</span> Selected Work</div>
          <h2>Selected <em>technical work</em></h2>
          <p className="writing-intro">
            Solving complex problems at the intersection of web architecture and machine learning.
          </p>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((p, i) => (
          <WorkItem key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Work;
