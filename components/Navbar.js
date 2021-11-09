import Link from 'next/link'
import ThemeSwitcher from '@/components/actions/ThemeSwitcher'
import Logo from '@/svgs/logo.svg'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__grid">
        <div className="navbar__flex">
          <Link href="/">
            <a>
              <Logo width="23" height="23" />
            </a>
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
