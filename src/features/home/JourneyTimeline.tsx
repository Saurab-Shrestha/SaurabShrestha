import React from 'react';

// ─── DATA ────────────────────────────────────────────────────────────────────

interface Badge {
  text: string;
  bg: string;
  color: string;
  border: string;
}

interface TimelineItem {
  year: string;
  title: string;
  org: string;
  desc: string;
  badge?: Badge;
}

interface TimelineColumn {
  label: string;
  color: string;
  items: TimelineItem[];
}

interface TimelineData {
  sectionNum: string;
  sectionLabel: string;
  heading: string[];
  headingItalicIndex: number;
  description: string;
  stats: { value: number; label: string }[];
  columns: TimelineColumn[];
}

const timelineData: TimelineData = {
  sectionNum: '02',
  sectionLabel: 'My Journey',
  heading: ['Education &', 'Experience'],
  headingItalicIndex: 1,
  description:
    "A timeline of how I've grown as a developer — from university coursework to building real-world AI applications.",
  stats: [
    { value: 3, label: 'Years active' },
    { value: 5, label: 'Milestones' },
  ],
  columns: [
    {
      label: 'Education',
      color: '#7F77DD',
      items: [
        {
          year: '2018 — 2023',
          title: 'Bachelor of Computer Science and Information Technology',
          org: 'Bhaktapur Multiple Campus',
          desc: 'Studied computer science with a focus on algorithms, data structures, and artificial intelligence. Consistently among top performers in the cohort.',
          badge: {
            text: 'Completed',
            bg: 'rgba(127,119,221,0.1)',
            color: '#3C3489',
            border: 'rgba(127,119,221,0.3)',
          },
        },
        {
          year: '2016 — 2018',
          title: 'Higher Secondary (+2 Science)',
          org: 'Premier College',
          desc: 'Completed science stream with 3.38 GPA. Developed a strong foundation in mathematics and physics, which later informed my approach to ML algorithms.',
          badge: {
            text: 'Completed',
            bg: 'rgba(127,119,221,0.1)',
            color: '#3C3489',
            border: 'rgba(127,119,221,0.3)',
          },
        },
        // {
        //   year: '2021 — 2023',
        //   title: 'Advanced Self-Learning & Cerifications',
        //   org: 'Self-Directed',
        //   desc: 'Intensive study of modern web architectures and deep learning. Completed various certifications in Full-Stack development and Machine Learning from global platforms.',
        // },
      ],
    },
    {
      label: 'Experience & Projects',
      color: '#1D9E75',
      items: [
        {
          year: '2023 — Present',
          title: 'Asst. Software Engineer',
          org: 'Quickfox Consulting',
          desc: 'Building full-stack web applications and AI-powered chatbots for clients. Delivered chatbots, automation scripts, and ML-based solutions.',
          badge: {
            text: 'Current',
            bg: 'rgba(29,158,117,0.1)',
            color: '#0F6E56',
            border: 'rgba(29,158,117,0.3)',
          },
        },
        // {
        //   year: '2023',
        //   title: 'AI/ML Project — Signature Verification',
        //   org: 'University Final Year Project',
        //   desc: "Designed and trained a CNN-based signature verification system achieving high accuracy. Presented at university's annual tech showcase.",
        // },
        // {
        //   year: '2022',
        //   title: 'Open-Source Contributor',
        //   org: 'GitHub Community',
        //   desc: 'Started contributing to open-source projects, primarily in the Python ecosystem. Improved documentation and resolved bugs in data science tooling.',
        // },
      ],
    },
  ],
};

// ─── HOOKS ───────────────────────────────────────────────────────────────────



// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

const JourneyTimeline: React.FC<{ data?: TimelineData }> = ({ data = timelineData }) => {

  const headingLines = data.heading.map((line, i) =>
    i === data.headingItalicIndex ? <em key={i}>{line}</em> : <span key={i}>{line}</span>
  );

  // Flatten and structure all timeline events for editorial zig-zag layout
  const flatEvents = [
    ...data.columns[1].items.map(i => ({ ...i, category: data.columns[1].label, dotColor: data.columns[1].color })),
    ...data.columns[0].items.map(i => ({ ...i, category: data.columns[0].label, dotColor: data.columns[0].color }))
  ];

  return (
    <>
      <div className="section-divider" />

      <section id="timeline" className="tl-section">
        {/* Header */}
        <div className="tl-header" style={{ marginBottom: "64px" }}>
          <div>
            <h2>
              {headingLines[0]} {headingLines[1]}
            </h2>
            <p className="tl-header-p" style={{ fontSize: "14.5px", color: "var(--muted)", maxWidth: "500px", lineHeight: 1.8 }}>
              {data.description}
            </p>
          </div>
        </div>

        {/* Editorial Timeline Wrap */}
        <div className="timeline-wrap">
          {flatEvents.map((item, i) => {
            const isLeft = i % 2 !== 0;
            return (
              <div key={i} className={`tl-item reveal ${isLeft ? 'tt-left' : 'tt-right'}`}>
                <div className="tl-dot" style={{ borderColor: item.dotColor }} />
                
                {item.badge && (
                  <div className="tl-badge" style={{ 
                    background: item.badge.bg, 
                    color: item.badge.color, 
                    borderColor: item.badge.border || 'transparent' 
                  }}>
                    {item.badge.text}
                  </div>
                )}
                
                <div className="tl-year" style={{ color: item.dotColor }}>{item.year}</div>
                <div className="tl-title">{item.title}</div>
                <div className="tl-org">{item.org} • {item.category}</div>
                
                <div className="tl-desc">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
        
      </section>
    </>
  );
};

export default JourneyTimeline;
