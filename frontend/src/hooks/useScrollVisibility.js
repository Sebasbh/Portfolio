import { useEffect, useState } from 'react'

export const useScrollVisibility = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const handleScroll = () => {
      const { scrollY } = window
      setIsScrolled(scrollY > 24)
      setShowBackToTop(scrollY > 320)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isScrolled, showBackToTop }
}

export default useScrollVisibility
