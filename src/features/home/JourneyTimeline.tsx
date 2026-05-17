import React from 'react';

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

const columns: TimelineColumn[] = [
  {
    label: 'Education',
    color: '#7F77DD',
    items: [
      {
        year: '2018 — 2023',
        title: 'Bachelor of Computer Science and Information Technology',
        org: 'Bhaktapur Multiple Campus',
        desc: 'Focused on algorithms, data structures, and artificial intelligence. Consistently among top performers in the cohort.',
        badge: { text: 'Completed', bg: 'rgba(127,119,221,0.1)', color: '#3C3489', border: 'rgba(127,119,221,0.3)' },
      },
      {
        year: '2021 — 2023',
        title: 'Self-Directed Learning',
        org: 'Online — Coursera / fast.ai',
        desc: 'Deep learning, modern web architectures, and ML engineering. Certifications in full-stack development and machine learning from global platforms.',
        badge: { text: 'Completed', bg: 'rgba(127,119,221,0.1)', color: '#3C3489', border: 'rgba(127,119,221,0.3)' },
      },
      {
        year: '2016 — 2018',
        title: 'Higher Secondary (+2 Science)',
        org: 'Premier College',
        desc: 'Science stream, 3.38 GPA. Strong foundation in mathematics and physics — the lens I still use for ML problems.',
        badge: { text: 'Completed', bg: 'rgba(127,119,221,0.1)', color: '#3C3489', border: 'rgba(127,119,221,0.3)' },
      },
    ],
  },
  {
    label: 'Experience',
    color: '#1D9E75',
    items: [
      {
        year: '2023 — Present',
        title: 'Asst. Software Engineer',
        org: 'Quickfox Consulting',
        desc: 'Building full-stack web applications and AI-powered chatbots for clients. Delivered chatbots, automation scripts, and ML-based solutions.',
        badge: { text: 'Current', bg: 'rgba(29,158,117,0.1)', color: '#0F6E56', border: 'rgba(29,158,117,0.3)' },
      },
      {
        year: '2023',
        title: 'Signature Verification System',
        org: 'University Final Year Project',
        desc: 'CNN-based signature verification achieving high accuracy. Presented at the university annual tech showcase.',
        badge: { text: 'Showcased', bg: 'rgba(29,158,117,0.1)', color: '#0F6E56', border: 'rgba(29,158,117,0.3)' },
      },
      {
        year: '2022',
        title: 'Tomato Disease Detection',
        org: 'Personal Research Project',
        desc: 'Computer vision model for plant pathology detection. Transfer learning on a small dataset using fast.ai small-data techniques.',
      },
    ],
  },
];

const JourneyTimeline: React.FC = () => {
  return (
    <>
      <div className="section-divider" />

      <section id="timeline" className="tl-section">
        <div className="tl-header">
          <div className="section-label">
            <span className="num">02</span> Journey
          </div>
          <h2>Education &amp; <em>Experience</em></h2>
          <p className="tl-header-p">
            From university coursework to building real-world AI applications.
          </p>
        </div>

        <div className="tl-columns">
          {columns.map((col) => (
            <div key={col.label} className="tl-column">
              <div className="tl-column-label" style={{ color: col.color }}>
                {col.label}
              </div>
              <div className="tl-column-items">
                {col.items.map((item, i) => (
                  <div key={i} className="tl-entry reveal">
                    <div className="tl-entry-dot" style={{ background: col.color }} />
                    <div className="tl-entry-body">
                      {item.badge && (
                        <span className="tl-badge" style={{
                          background: item.badge.bg,
                          color: item.badge.color,
                          borderColor: item.badge.border,
                        }}>
                          {item.badge.text}
                        </span>
                      )}
                      <div className="tl-year">{item.year}</div>
                      <div className="tl-title">{item.title}</div>
                      <div className="tl-org">{item.org}</div>
                      <p className="tl-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default JourneyTimeline;
