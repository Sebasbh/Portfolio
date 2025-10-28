import { useEffect, useState } from 'react'

export const useHeroTyping = (text, speed = 50) => {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (!text) {
      setTypedText('')
      return undefined
    }

    if (typeof window === 'undefined') {
      setTypedText(text)
      return undefined
    }

    let index = 0
    setTypedText('')
    const interval = window.setInterval(() => {
      index += 1
      setTypedText(text.slice(0, index))
      if (index >= text.length) {
        window.clearInterval(interval)
      }
    }, speed)

    return () => window.clearInterval(interval)
  }, [text, speed])

  return typedText
}

export default useHeroTyping
