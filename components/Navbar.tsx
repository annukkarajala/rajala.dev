import CustomLink from '@/components/actions/CustomLink'
import ThemeSwitcher from '@/components/actions/ThemeSwitcher'
import Logo from '@/svgs/logo.svg'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__grid">
        <div className="navbar__flex">
          <CustomLink href="/" ariaLabel="Etusivu" className="navbar__logo">
            <Logo width="23" height="23" aria-hidden="true" focusable="false" />
          </CustomLink>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
