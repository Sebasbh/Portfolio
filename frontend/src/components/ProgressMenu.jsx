const ProgressMenu = ({ navLinks, activeSection, onAnchorClick }) => (
  <nav className="progress-menu" aria-label="Progreso de scroll">
    <ul>
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <button
            type="button"
            className={activeSection === href ? 'is-active' : ''}
            onClick={(event) => onAnchorClick(event, href)}
            aria-current={activeSection === href ? 'true' : 'false'}
          >
            <span className="progress-dot" />
            <span className="progress-label">{label}</span>
          </button>
        </li>
      ))}
    </ul>
  </nav>
)

export default ProgressMenu
