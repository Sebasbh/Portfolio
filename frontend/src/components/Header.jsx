const Header = ({
  navLinks,
  isScrolled,
  menuOpen,
  language,
  theme,
  onToggleTheme,
  onToggleMenu,
  onToggleLanguage,
  onAnchorClick,
}) => {
  const isDark = theme === 'dark'
  const themeLabel =
    language === 'es'
      ? isDark
        ? 'Cambiar a modo claro'
        : 'Cambiar a modo oscuro'
      : isDark
      ? 'Switch to light mode'
      : 'Switch to dark mode'
  const languageLabel = language === 'es' ? 'Cambiar idioma' : 'Switch language'
  const menuLabel =
    language === 'es'
      ? menuOpen
        ? 'Cerrar menú'
        : 'Abrir menú'
      : menuOpen
      ? 'Close menu'
      : 'Open menu'

  return (
    <header className="site-header" data-scrolled={isScrolled}>
      <div className="container">
        <a
          href="#hero"
          className="logo"
          aria-label="Volver al inicio"
          onClick={(event) => onAnchorClick(event, '#hero')}
        >
          SB<span>.</span>
        </a>
        <nav className="main-nav" data-nav data-open={menuOpen}>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={(event) => onAnchorClick(event, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            data-theme-toggle
            data-mode={theme}
            aria-label={themeLabel}
            aria-pressed={isDark}
            title={themeLabel}
          >
            <svg
              className="theme-icon theme-icon-sun"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 1.5a1 1 0 0 1 1 1V4a1 1 0 1 1-2 0V2.5a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zm10.5-7a1 1 0 0 1-1 1H19a1 1 0 1 1 0-2h2.5a1 1 0 0 1 1 1zm-18 0a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1zm13.3-6.36 1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41zM6.7 17.66l-1.06 1.06a1 1 0 0 1-1.41-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41zm0-10.32a1 1 0 0 1-1.41 0L4.23 6.27a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41zm10.32 10.32a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0z"
              />
            </svg>
            <svg
              className="theme-icon theme-icon-moon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79z"
              />
            </svg>
          </button>
          <button
            className="language-toggle"
            type="button"
            onClick={onToggleLanguage}
            aria-label={languageLabel}
            title={languageLabel}
          >
            {language.toUpperCase()}
          </button>
          <button
            className="menu-toggle"
            type="button"
            data-menu-toggle
            aria-label={menuLabel}
            onClick={onToggleMenu}
            aria-expanded={menuOpen}
            title={menuLabel}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
