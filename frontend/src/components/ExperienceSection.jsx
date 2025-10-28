const ExperienceSection = ({ meta, experience }) => (
  <section className="experience section-alt" id="experience">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">{meta.eyebrow}</span>
        <h2>{meta.heading}</h2>
      </div>
      <div className="timeline">
        {experience.map(({ period, role, summary, achievements, icon }) => (
          <article className="timeline-item reveal" key={role}>
            <span className="timeline-year">
              <span className="timeline-badge">{icon}</span>
              {period}
            </span>
            <div>
              <h3>{role}</h3>
              <p>{summary}</p>
              <ul>
                {achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ExperienceSection
