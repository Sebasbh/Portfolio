import { useEffect, useState } from 'react'

export const useScrollSpy = (watchKey) => {
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    const sections = document.querySelectorAll('main section[id]')
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.45 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [watchKey])

  return activeSection
}

export default useScrollSpy
