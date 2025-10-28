import '@testing-library/jest-dom'
import { vi } from 'vitest'

const listeners = new Set()

const mediaQuery = {
  matches: false,
  media: '(prefers-color-scheme: dark)',
  onchange: null,
  addEventListener: (event, handler) => {
    if (event === 'change') {
      listeners.add(handler)
    }
  },
  removeEventListener: (event, handler) => {
    if (event === 'change') {
      listeners.delete(handler)
    }
  },
  addListener: (handler) => {
    listeners.add(handler)
  },
  removeListener: (handler) => {
    listeners.delete(handler)
  },
  dispatchEvent: (event) => {
    if (event.type === 'change') {
      mediaQuery.matches = event.matches ?? mediaQuery.matches
      listeners.forEach((listener) => listener(event))
      if (typeof mediaQuery.onchange === 'function') {
        mediaQuery.onchange(event)
      }
    }
    return true
  },
}

if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn(() => mediaQuery),
  })
}

if (typeof window !== 'undefined' && typeof window.__setMockMatchMedia !== 'function') {
  window.__setMockMatchMedia = (matches) => {
    mediaQuery.matches = matches
    const event = { matches, media: mediaQuery.media, type: 'change' }
    listeners.forEach((listener) => listener(event))
    if (typeof mediaQuery.onchange === 'function') {
      mediaQuery.onchange(event)
    }
  }
}
