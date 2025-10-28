const SkillsSection = ({ meta, skills }) => (
  <section className="skills section-alt" id="skills">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">{meta.eyebrow}</span>
        <h2>{meta.heading}</h2>
      </div>
      <div className="skills-grid">
        {skills.map(({ title, subtitle, items }) => (
          <article className="skill-card reveal" key={title}>
            <header>
              <h3>{title}</h3>
              <span>{subtitle}</span>
            </header>
            <ul>
              {items.map(({ skill, level, iconUrl, iconAlt, description }) => (
                <li key={skill}>
                  <span className="skill-icon" aria-hidden="true">
                    <img src={iconUrl} alt={iconAlt ?? `${skill} logo`} loading="lazy" />
                  </span>
                  <div className="skill-content">
                    <div className="skill-header">
                      <span className="skill-name">{skill}</span>
                      <span className="skill-level">{level}</span>
                    </div>
                    <p className="skill-description">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default SkillsSection
