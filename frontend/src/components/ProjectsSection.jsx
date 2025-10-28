const ProjectsSection = ({ meta, projects }) => (
  <section className="projects" id="projects">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">{meta.eyebrow}</span>
        <h2>{meta.heading}</h2>
      </div>
      <div className="project-grid">
        {projects.map(({ title, year, tags, description, media, highlight, caseLabel, caseHref, secondaryHref, secondaryLabel }) => (
          <article className="project-card reveal" key={title}>
            <div className="project-media" aria-hidden="true">
              <img src={media} alt={`Mockup de ${title}`} loading="lazy" />
            </div>
            <div className="project-meta">
              <span className="project-year">{year}</span>
              <ul className="tag-list">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-actions">
              <a href={caseHref} className="btn ghost">
                {caseLabel}
              </a>
              <a href={secondaryHref} className="btn text">
                {secondaryLabel}
              </a>
            </div>
            <p className="project-highlight">{highlight}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ProjectsSection
