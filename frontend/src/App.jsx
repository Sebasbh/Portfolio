import { useCallback, useEffect, useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutSection from './components/AboutSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import HighlightsSection from './components/HighlightsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import ProgressMenu from './components/ProgressMenu.jsx'
import { content } from './data/content.js'
import { useHeroTyping } from './hooks/useHeroTyping.js'
import { useMenuControls } from './hooks/useMenuControls.js'
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { useScrollVisibility } from './hooks/useScrollVisibility.js'
import { useTheme } from './hooks/useTheme.js'

const replaceNameToken = (template, rawName) => {
  if (!template) return ''
  const name = rawName?.trim()
  return template.replace('%NAME%', name ? `, ${name}` : '')
}

function App() {
  const [language, setLanguage] = useState('es')
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasEmailJSConfig, setHasEmailJSConfig] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { menuOpen, toggleMenu, closeMenu } = useMenuControls()
  const { isScrolled, showBackToTop } = useScrollVisibility()
  const locale = content[language]
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  const {
    navLinks,
    hero,
    badges,
    about,
    skillsMeta,
    skills,
    projectsMeta,
    projects,
    experienceMeta,
    experience,
    highlightsMeta,
    highlights,
    contact,
    contactLinks,
    socialsLabel,
    socials,
    footer,
  } = locale
  const typedTitle = useHeroTyping(hero.title)
  const activeSection = useScrollSpy(language)
  useRevealOnScroll(language)

  useEffect(() => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (serviceId && templateId && publicKey) {
      emailjs.init(publicKey)
      setHasEmailJSConfig(true)
    } else {
      setHasEmailJSConfig(false)
    }
  }, [])

  useEffect(() => {
    setStatusMessage('')
    setStatusType('idle')
  }, [language])

  useEffect(() => {
    if (!statusMessage) return undefined
    if (typeof window === 'undefined') return undefined
    const timeout = window.setTimeout(() => {
      setStatusMessage('')
      setStatusType('idle')
    }, 6000)
    return () => window.clearTimeout(timeout)
  }, [statusMessage])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
    closeMenu()
  }, [closeMenu])

  const handleAnchorClick = useCallback(
    (event, href) => {
      if (!href.startsWith('#') || href.length <= 1) return
      if (typeof document === 'undefined') return
      const target = document.querySelector(href)
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', href)
        if (window.innerWidth <= 780) {
          closeMenu()
        }
      }
    },
    [closeMenu]
  )

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    setIsSubmitting(true)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

    try {
      if (hasEmailJSConfig) {
        await emailjs.send(serviceId, templateId, payload)
        form.reset()
        setStatusType('success')
        setStatusMessage(replaceNameToken(contact.form.success, payload.name))
      } else {
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          throw new Error('Error al enviar mensaje')
        }

        form.reset()
        setStatusType('success')
        setStatusMessage(replaceNameToken(contact.form.success, payload.name))
      }
    } catch (error) {
      console.error('Failed to submit contact form', error)
      setStatusType('error')
      setStatusMessage(contact.form.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header
        navLinks={navLinks}
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        language={language}
        theme={theme}
        onToggleTheme={toggleTheme}
        onToggleMenu={toggleMenu}
        onToggleLanguage={toggleLanguage}
        onAnchorClick={handleAnchorClick}
      />

      <main>
        <Hero
          heroTitle={hero.title}
          typedTitle={typedTitle}
          heroDescription={hero.description}
          heroMetrics={hero.metrics}
          stackIcons={hero.stackIcons}
          ctaPrimary={hero.ctaPrimary}
          ctaSecondary={hero.ctaSecondary}
          profileImage={hero.profileImage}
          profileImageAlt={hero.profileImageAlt}
          resume={hero.resume}
          onAnchorClick={handleAnchorClick}
        />
        <AboutSection about={about} badges={badges} />
        <SkillsSection meta={skillsMeta} skills={skills} />
        <ProjectsSection meta={projectsMeta} projects={projects} />
        <ExperienceSection meta={experienceMeta} experience={experience} />
        <HighlightsSection meta={highlightsMeta} highlights={highlights} />
        <ContactSection
          contact={contact}
          contactLinks={contactLinks}
          socials={socials}
          socialsLabel={socialsLabel}
          statusMessage={statusMessage}
          statusType={statusType}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      </main>

      <Footer
        currentYear={currentYear}
        footer={footer}
        navLinks={navLinks}
        onAnchorClick={handleAnchorClick}
      />
      <BackToTop showBackToTop={showBackToTop} />
      <a className="floating-logo" href="https://github.com/Sebasbh" target="_blank" rel="noopener noreferrer">
        <img src="/assets/Logo.png" alt="Sebastián Benavides logo" loading="lazy" />
      </a>
      <ProgressMenu
        navLinks={navLinks}
        activeSection={activeSection}
        onAnchorClick={handleAnchorClick}
      />
    </>
  )
}

export default App
