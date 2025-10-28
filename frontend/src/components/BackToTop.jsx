const BackToTop = ({ showBackToTop }) => (
  <button
    className="back-to-top"
    data-back-to-top
    aria-label="Volver arriba"
    data-visible={showBackToTop}
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <span />
  </button>
)

export default BackToTop
