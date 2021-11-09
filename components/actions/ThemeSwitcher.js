import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // get access to theme after mounting
  useEffect(() => setMounted(true), [])

  return (
    <div>
      {mounted && (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme}
        </button>
      )}
    </div>
  )
}
