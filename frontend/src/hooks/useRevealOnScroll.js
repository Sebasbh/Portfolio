import { useEffect } from 'react'

export const useRevealOnScroll = (watchKey) => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [watchKey])
}

export default useRevealOnScroll
