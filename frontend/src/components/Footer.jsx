const Footer = ({ currentYear, footer, navLinks, onAnchorClick }) => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-copy">
        <p>
          © <span>{currentYear}</span> Sebastián Benavides Heins. {footer.signature}
        </p>
        <p className="footer-availability">{footer.availability}</p>
      </div>
      <ul className="footer-nav">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={(event) => onAnchorClick(event, href)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)

export default Footer
