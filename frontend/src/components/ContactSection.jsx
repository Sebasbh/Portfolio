const ContactSection = ({
  contact,
  contactLinks,
  socials,
  socialsLabel,
  statusMessage,
  statusType,
  isSubmitting,
  onSubmit,
}) => (
  <section className="contact section-alt" id="contact">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">{contact.eyebrow}</span>
        <h2>{contact.heading}</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <p>{contact.description}</p>
          {Array.isArray(socials) && socials.length > 0 && (
            <div className="contact-socials">
              <span className="contact-label">{socialsLabel}</span>
              <ul>
                {socials.map(({ platform, handle, href, iconUrl }) => (
                  <li key={platform}>
                    <a className="social-pill" href={href} target="_blank" rel="noopener noreferrer">
                      <span className="social-icon" aria-hidden="true">
                        <img src={iconUrl} alt={`${platform} icon`} loading="lazy" />
                      </span>
                      <span className="social-text">
                        <span className="social-platform">{platform}</span>
                        <span className="social-handle">{handle}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="contact-list">
            {contactLinks.map(({ label, value, href }) => (
              <li key={label}>
                <span className="contact-label">{label}</span>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">{contact.form.nameLabel}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={contact.form.namePlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{contact.form.emailLabel}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={contact.form.emailPlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">{contact.form.topicLabel}</label>
            <select id="topic" name="topic" required defaultValue="">
              <option value="" disabled>
                {contact.form.topicPlaceholder}
              </option>
              {contact.form.topics.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">{contact.form.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder={contact.form.messagePlaceholder}
              required
            />
          </div>
          <button type="submit" className="btn primary" disabled={isSubmitting}>
            {isSubmitting ? contact.form.sending : contact.form.submit}
          </button>
          <p
            className={`form-status ${statusType}`}
            role="status"
            aria-live="polite"
            data-visible={Boolean(statusMessage)}
          >
            {statusType === 'success' && statusMessage && <span aria-hidden="true">✅</span>}
            {statusType === 'error' && statusMessage && <span aria-hidden="true">⚠️</span>}
            <span>{statusMessage}</span>
          </p>
        </form>
      </div>
    </div>
  </section>
)

export default ContactSection
