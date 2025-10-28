import { act, renderHook, waitFor } from '@testing-library/react'

import { useTheme } from './useTheme.js'

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    if (typeof window.__setMockMatchMedia === 'function') {
      window.__setMockMatchMedia(false)
    }
  })

  it('uses stored theme when available', async () => {
    window.localStorage.setItem('theme', 'light')
    const { result } = renderHook(() => useTheme())

    expect(result.current.theme).toBe('light')
    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-theme')).toBe('light')
      expect(window.localStorage.getItem('theme')).toBe('light')
    })
  })

  it('toggles theme and persists selection', async () => {
    window.localStorage.setItem('theme', 'light')
    const { result } = renderHook(() => useTheme())

    await waitFor(() => {
      expect(result.current.theme).toBe('light')
    })

    await act(async () => {
      result.current.toggleTheme()
    })

    await waitFor(() => {
      expect(result.current.theme).toBe('dark')
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
      expect(window.localStorage.getItem('theme')).toBe('dark')
    })
  })

  it('honors system preference when no stored theme exists', async () => {
    window.__setMockMatchMedia(false)
    const { result } = renderHook(() => useTheme())

    await waitFor(() => {
      expect(result.current.theme).toBe('light')
    })

    window.localStorage.removeItem('theme')

    await act(async () => {
      window.__setMockMatchMedia(true)
    })

    await waitFor(() => {
      expect(result.current.theme).toBe('dark')
    })
  })

  it('ignores system preference changes when a stored theme exists', async () => {
    window.localStorage.setItem('theme', 'dark')
    const { result } = renderHook(() => useTheme())

    await waitFor(() => {
      expect(result.current.theme).toBe('dark')
    })

    await act(async () => {
      window.__setMockMatchMedia(false)
    })

    await waitFor(() => {
      expect(result.current.theme).toBe('dark')
      expect(window.localStorage.getItem('theme')).toBe('dark')
    })
  })
})
