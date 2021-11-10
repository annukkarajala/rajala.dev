import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import svgDark from '@/svgs/icons/theme-dark.svg'
import svgLight from '@/svgs/icons/theme-light.svg'

const iconTypes = {
  light: svgLight,
  dark: svgDark,
}

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // get access to theme after mounting
  useEffect(() => setMounted(true), [])

  const inactiveTheme = resolvedTheme === 'light' ? 'dark' : 'light'
  const Icon = iconTypes[inactiveTheme]

  return (
    <div className="theme-switcher__wrapper">
      {mounted && (
        <button
          className="theme-switcher"
          onClick={() =>
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }>
          <Icon width="24" height="24" />
        </button>
      )}
    </div>
  )
}
