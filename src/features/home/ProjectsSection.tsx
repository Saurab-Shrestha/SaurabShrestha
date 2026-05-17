import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  num: string;
  type: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  thumbnail: React.ReactNode;
}

const NeuralNoodleThumbnail: React.FC = () => (
  <svg
    viewBox="0 0 480 270"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    <rect width="480" height="270" fill="#f5f3f0" />
    {/* Grid */}
    <line x1="0" y1="135" x2="480" y2="135" stroke="rgba(30,20,15,0.06)" strokeWidth="1" />
    <line x1="240" y1="0" x2="240" y2="270" stroke="rgba(30,20,15,0.06)" strokeWidth="1" />
    {/* Evidence nodes */}
    <circle cx="120" cy="80" r="5" fill="rgba(255,92,53,0.9)" />
    <circle cx="240" cy="50" r="5" fill="rgba(255,92,53,0.9)" />
    <circle cx="360" cy="80" r="5" fill="rgba(255,92,53,0.6)" />
    <circle cx="80" cy="155" r="5" fill="rgba(92,232,200,0.8)" />
    <circle cx="200" cy="175" r="5" fill="rgba(92,232,200,0.8)" />
    <circle cx="320" cy="160" r="5" fill="rgba(92,232,200,0.6)" />
    <circle cx="420" cy="145" r="5" fill="rgba(92,232,200,0.5)" />
    {/* Central hypothesis node */}
    <circle cx="240" cy="135" r="10" fill="rgba(255,92,53,0.15)" stroke="rgba(255,92,53,0.7)" strokeWidth="1.5" />
    {/* Supporting edges (solid) */}
    <line x1="120" y1="80" x2="240" y2="135" stroke="rgba(255,92,53,0.35)" strokeWidth="1" />
    <line x1="240" y1="50" x2="240" y2="125" stroke="rgba(255,92,53,0.45)" strokeWidth="1" />
    <line x1="80" y1="155" x2="230" y2="135" stroke="rgba(92,232,200,0.3)" strokeWidth="1" />
    <line x1="200" y1="175" x2="240" y2="145" stroke="rgba(92,232,200,0.3)" strokeWidth="1" />
    {/* Contradicting edges (dashed) */}
    <line x1="360" y1="80" x2="250" y2="135" stroke="rgba(255,184,77,0.4)" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="320" y1="160" x2="250" y2="140" stroke="rgba(255,184,77,0.35)" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="420" y1="145" x2="250" y2="137" stroke="rgba(255,184,77,0.25)" strokeWidth="1" strokeDasharray="3 3" />
    {/* Labels */}
    <text x="240" y="134" fontFamily="monospace" fontSize="7" fill="rgba(255,92,53,0.9)" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">H</text>
    <text x="240" y="222" fontFamily="monospace" fontSize="8" fill="rgba(255,92,53,0.4)" letterSpacing="2" textAnchor="middle">EVIDENCE GRAPH</text>
    <text x="370" y="210" fontFamily="monospace" fontSize="7" fill="rgba(255,184,77,0.5)" letterSpacing="1" textAnchor="middle">contradicts</text>
    <text x="110" y="210" fontFamily="monospace" fontSize="7" fill="rgba(92,232,200,0.5)" letterSpacing="1" textAnchor="middle">supports</text>
    {/* Legend lines */}
    <line x1="58" y1="207" x2="76" y2="207" stroke="rgba(92,232,200,0.4)" strokeWidth="1" />
    <line x1="328" y1="207" x2="346" y2="207" stroke="rgba(255,184,77,0.4)" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

const SvufeThumbnail: React.FC = () => (
  <svg
    viewBox="0 0 480 270"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    <rect width="480" height="270" fill="#f0ede8" />
    {/* Grid */}
    <line x1="0" y1="135" x2="480" y2="135" stroke="rgba(30,20,15,0.07)" strokeWidth="1" />
    <line x1="240" y1="0" x2="240" y2="270" stroke="rgba(30,20,15,0.07)" strokeWidth="1" />
    {/* Signature A — irregular waveform */}
    <polyline
      points="32,160 60,100 88,175 116,85 144,155 172,110 200,165 228,95 240,135"
      fill="none"
      stroke="rgba(255,92,53,0.6)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Signature B — offset, slightly different rhythm */}
    <polyline
      points="240,135 256,90 284,168 312,88 340,158 368,102 396,162 424,92 452,135"
      fill="none"
      stroke="rgba(92,232,200,0.5)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Divider */}
    <line x1="240" y1="60" x2="240" y2="210" stroke="rgba(30,20,15,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    {/* Verified badge */}
    <circle cx="390" cy="52" r="22" fill="rgba(29,158,117,0.15)" stroke="rgba(92,232,200,0.4)" strokeWidth="1" />
    <polyline
      points="381,52 388,59 401,45"
      fill="none"
      stroke="#5ce8c8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Label A */}
    <text x="116" y="218" fontFamily="monospace" fontSize="9" fill="rgba(255,92,53,0.5)" letterSpacing="2" textAnchor="middle">SAMPLE A</text>
    {/* Label B */}
    <text x="364" y="218" fontFamily="monospace" fontSize="9" fill="rgba(92,232,200,0.45)" letterSpacing="2" textAnchor="middle">SAMPLE B</text>
    {/* Match label */}
    <text x="390" y="88" fontFamily="monospace" fontSize="8" fill="rgba(92,232,200,0.6)" letterSpacing="1.5" textAnchor="middle">MATCH</text>
  </svg>
);

const projects: Project[] = [
  {
    id: 'neuralnoodle',
    num: '01',
    type: 'AI Research Systems',
    name: 'NeuralNoodle',
    desc: 'Standard RAG answers questions. NeuralNoodle investigates them. A stateful agentic system that tracks hypotheses across documents, maps contradictions in an Evidence Graph, and reaches Saturation only when the knowledge base has nothing new to offer.',
    tech: ['LangGraph', 'Python', 'Qdrant', 'FastAPI'],
    github: 'https://github.com/Saurab-Shrestha/NeuralNoodle',
    thumbnail: <NeuralNoodleThumbnail />,
  },
  {
    id: 'tdd',
    num: '02',
    type: 'AI / ML',
    name: 'Tomato Disease Detection',
    desc: 'An AI-powered app assisting farmers by detecting diseases in tomato plants through computer vision and deep learning models trained on plant datasets.',
    tech: ['Flask', 'HTML/CSS', 'Python'],
    github: '#',
    thumbnail: (
      <img
        src="/assets/tomato.png"
        alt="Tomato Disease Detection — screenshot of the disease analysis interface"
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
      />
    ),
  },
  {
    id: 'svufe',
    num: '04',
    type: 'AI / ML',
    name: 'Signature Verification System',
    desc: 'A robust signature verification system using advanced computer vision and ML to authenticate signatures reliably — presented at university showcase.',
    tech: ['OpenCV', 'Python', 'TensorFlow'],
    github: '#',
    thumbnail: <SvufeThumbnail />,
  },
];

const ProjectRow: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isReversed = index % 2 === 1;
  return (
    <Link
      to={`/work/${project.id}`}
      className={`project-row reveal ${isReversed ? 'project-row--reversed' : ''}`}
    >
      <div className="project-row-visual">
        {project.thumbnail}
      </div>
      <div className="project-row-content">
        <div className="project-row-meta">
          <span className="project-row-num">{project.num}</span>
          <span className="project-row-type">{project.type}</span>
        </div>
        <h3 className="project-row-name">{project.name}</h3>
        <p className="project-row-desc">{project.desc}</p>
        <div className="project-row-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
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

const ProjectsSection: React.FC = () => {
  return (
    <>
      <div className="section-divider"></div>

      <section id="projects">
        <div className="projects-header">
          <div>
            <div className="section-label">
              <span className="num">03</span> Selected Work
            </div>
            <h2>Selected <em>projects</em></h2>
          </div>
          <Link to="/work" className="writing-archive-link">
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </Link>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
