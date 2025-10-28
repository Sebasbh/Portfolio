const AboutSection = ({ about, badges }) => (
  <section className="about" id="about">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">{about.eyebrow}</span>
        <h2>{about.heading}</h2>
      </div>
      <div className="about-grid">
        <article className="about-copy reveal">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="values">
            {about.values.map(({ heading, copy }) => (
              <div key={heading}>
                <h3>{heading}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </article>
        <aside className="badge-grid reveal">
          {badges.map(({ title, copy }) => (
            <div className="badge" key={title}>
              <span className="badge-title">{title}</span>
              <p>{copy}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  </section>
)

export default AboutSection
