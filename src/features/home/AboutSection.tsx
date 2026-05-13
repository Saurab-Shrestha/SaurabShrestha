import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="section-divider"></div>
      <section id="about">
        <div className="about-grid">
          <div className="about-left reveal">
            <h2>Passionate about<br /><em>building things</em><br />that matter.</h2>
            <p className="about-body">
              I build full-stack systems with a deep lean into AI and machine learning,
              based in Bhaktapur, Nepal. My work sits at the intersection of rigorous
              engineering and product thinking: systems that hold under pressure and feel
              good to use.
              <br /><br />
              I care about the whole stack — from model training to the pixel on screen.
              That end-to-end ownership is what makes the work interesting.
            </p>
            <div className="skills-list">
              <div className="skill-row"><span className="skill-name">LangGraph</span><span className="skill-desc">stateful agent pipelines</span></div>
              <div className="skill-row"><span className="skill-name">Python</span><span className="skill-desc">ML, backend, automation</span></div>
              <div className="skill-row"><span className="skill-name">React / FastAPI</span><span className="skill-desc">full-stack delivery</span></div>
              <div className="skill-row"><span className="skill-name">Qdrant / PyTorch</span><span className="skill-desc">vector search and model training</span></div>
              <div className="skill-row"><span className="skill-name">OpenCV</span><span className="skill-desc">computer vision systems</span></div>
            </div>
          </div>
          <div className="about-right reveal">
            <div className="info-row"><span className="info-label">Location</span><span className="info-value">Bhaktapur, Nepal</span></div>
            <div className="info-row"><span className="info-label">Status</span><span className="info-value" style={{ color: 'var(--accent3)' }}>Available for opportunities</span></div>
            <div className="info-row"><span className="info-label">Focus</span><span className="info-value">AI/ML & Full-stack Development</span></div>
            <div className="info-row"><span className="info-label">Passion</span><span className="info-value">Creating intelligent solutions</span></div>
            <div className="info-row"><span className="info-label">Email</span><span className="info-value">shresthasaurab030@gmail.com</span></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
