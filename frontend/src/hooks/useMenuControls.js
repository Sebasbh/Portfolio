import { useCallback, useEffect, useState } from 'react'

export const useMenuControls = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const handleResize = () => {
      if (window.innerWidth > 780) {
        closeMenu()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [closeMenu])

  useEffect(() => {
    if (!menuOpen) return undefined
    if (typeof document === 'undefined') return undefined
    const handleOutside = (event) => {
      const nav = document.querySelector('[data-nav]')
      if (nav && !nav.contains(event.target)) {
        closeMenu()
      }
    }
    document.addEventListener('click', handleOutside)
    return () => document.removeEventListener('click', handleOutside)
  }, [menuOpen, closeMenu])

  return { menuOpen, toggleMenu, closeMenu }
}

export default useMenuControls
