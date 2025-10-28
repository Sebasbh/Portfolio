const Hero = ({
  heroTitle,
  typedTitle,
  heroDescription,
  heroMetrics,
  stackIcons,
  ctaPrimary,
  ctaSecondary,
  profileImage,
  profileImageAlt,
  resume,
  onAnchorClick,
}) => (
  <section className="hero" id="hero">
    <div className="container">
      <div className="hero-content">
        <span className="eyebrow hero-eyebrow" aria-live="polite">
          <span className="typing-cursor" aria-label={heroTitle}>
            {typedTitle || heroTitle}
          </span>
        </span>
        <h1>Sebastián Benavides Heins</h1>
        <p>{heroDescription}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#experience" onClick={(event) => onAnchorClick(event, '#experience')}>
            {ctaPrimary}
          </a>
          <a className="btn ghost" href="#contact" onClick={(event) => onAnchorClick(event, '#contact')}>
            {ctaSecondary}
          </a>
          {resume?.downloadHref && (
            <a className="btn accent" href={resume.downloadHref} download>
              {resume.downloadLabel}
            </a>
          )}
        </div>
        <dl className="hero-metrics">
          {heroMetrics.map(({ headline, copy }) => (
            <div key={headline}>
              <dt>{headline}</dt>
              <dd>{copy}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero-media">
        <div className="profile-card reveal">
          <div className="profile-photo">
            {profileImage ? (
              <img src={profileImage} alt={profileImageAlt ?? heroTitle} loading="lazy" />
            ) : (
              <span className="profile-photo-fallback" aria-hidden="true">
                SB
              </span>
            )}
          </div>
          <div className="profile-details">
            <p className="profile-name">Sebastián Benavides Heins</p>
            <p className="profile-role">Full Stack · Ciberseguridad</p>
          </div>
          <ul className="profile-tags">
            {stackIcons.map(({ label, iconUrl, iconAlt }) => (
              <li key={label}>
                <img src={iconUrl} alt={iconAlt ?? `${label} icon`} loading="lazy" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="floating-card highlighted reveal">
          <strong>Full Stack Jr.</strong>
          <span>Perfil orientado a calidad, pruebas y buenas prácticas</span>
        </div>
        <div className="floating-card reveal">
          <strong>+10 skills</strong>
          <span>Competencias blandas listas para sumar al equipo</span>
        </div>
        <div className="stack-orbit reveal">
          {stackIcons.map(({ label, iconUrl, iconAlt }) => (
            <span key={label} className="stack-icon" aria-hidden="true" title={label}>
              <img src={iconUrl} alt={iconAlt ?? `${label} icon`} loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Hero
