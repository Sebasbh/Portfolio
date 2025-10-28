import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import Header from './Header.jsx'

const buildProps = (overrides = {}) => ({
  navLinks: [
    { href: '#hero', label: 'Inicio' },
    { href: '#projects', label: 'Proyectos' },
  ],
  isScrolled: false,
  menuOpen: false,
  language: 'es',
  theme: 'light',
  onToggleTheme: vi.fn(),
  onToggleMenu: vi.fn(),
  onToggleLanguage: vi.fn(),
  onAnchorClick: vi.fn(),
  ...overrides,
})

describe('Header', () => {
  it('renders navigation links and delegates anchor clicks', async () => {
    const props = buildProps()
    const user = userEvent.setup()

    render(<Header {...props} />)

    const projectsLink = screen.getByRole('link', { name: 'Proyectos' })
    await user.click(projectsLink)

    expect(props.onAnchorClick).toHaveBeenCalledTimes(1)
    expect(props.onAnchorClick.mock.calls[0][1]).toBe('#projects')
  })

  it('uses language aware labels for theme and language toggles', async () => {
    const props = buildProps({ theme: 'dark' })
    const user = userEvent.setup()

    render(<Header {...props} />)

    const themeToggle = screen.getByRole('button', { name: /cambiar a modo claro/i })
    await user.click(themeToggle)
    expect(props.onToggleTheme).toHaveBeenCalledTimes(1)

    const languageToggle = screen.getByRole('button', { name: /cambiar idioma/i })
    await user.click(languageToggle)
    expect(props.onToggleLanguage).toHaveBeenCalledTimes(1)
  })

  it('reflects menu state in accessibility attributes', async () => {
    const props = buildProps({ menuOpen: true, language: 'en' })
    const user = userEvent.setup()

    render(<Header {...props} />)

    const menuToggle = screen.getByRole('button', { name: /close menu/i })
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(menuToggle)
    expect(props.onToggleMenu).toHaveBeenCalledTimes(1)
  })
})
