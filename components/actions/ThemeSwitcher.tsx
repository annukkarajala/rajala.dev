import * as React from 'react'
import { useTheme } from 'next-themes'
import svgDark from '@/svgs/icons/theme-dark.svg'
import svgLight from '@/svgs/icons/theme-light.svg'
import { SvgIcon } from '@/types/svg.types'

const icons: Record<'light' | 'dark', SvgIcon> = {
  light: svgLight,
  dark: svgDark,
}

export default function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Get access to theme after mounting
  React.useEffect(() => setMounted(true), [])

  const inactiveTheme = resolvedTheme === 'light' ? 'dark' : 'light'
  const Icon = icons[inactiveTheme]

  return (
    <div className="theme-switcher__wrapper">
      {mounted && (
        <button
          aria-label={`Vaihda ${
            inactiveTheme === 'light' ? 'vaalea' : 'tumma'
          } teema`}
          className="theme-switcher"
          onClick={() =>
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }>
          <Icon width="24" height="24" aria-hidden="true" focusable="false" />
        </button>
      )}
    </div>
  )
}
