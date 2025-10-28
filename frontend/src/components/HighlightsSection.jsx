const HighlightsSection = ({ meta, highlights }) => (
  <section className="testimonials">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">{meta.eyebrow}</span>
        <h2>{meta.heading}</h2>
      </div>
      <div className="testimonial-grid">
        {highlights.map(({ title, items, icon }) => (
          <figure className="testimonial-card reveal" key={title}>
            <div className="testimonial-icon" aria-hidden="true">
              {icon}
            </div>
            <blockquote>{items.join(' · ')}</blockquote>
            <figcaption>
              <span className="author">{title}</span>
              <span className="role">{meta.roleNote}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)

export default HighlightsSection
