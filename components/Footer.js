import CustomLink from '@/components/actions/CustomLink'

import SvgCopyright from '@/svgs/icons/copyright.svg'
import SvgGitHub from '@/svgs/icons/github.svg'
import SvgLinkedIn from '@/svgs/icons/linkedin.svg'
import SvgDribbble from '@/svgs/icons/dribbble.svg'
import SvgCodePen from '@/svgs/icons/codepen.svg'

const links = [
  {
    url: 'https://github.com/annukkarajala',
    icon: SvgGitHub,
    name: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/annukkarajala/',
    icon: SvgLinkedIn,
    name: 'LinkedIn',
  },
  {
    url: 'https://codepen.io/arajala',
    icon: SvgDribbble,
    name: 'Dribbble',
  },
  {
    url: 'https://dribbble.com/arajala',
    icon: SvgCodePen,
    name: 'CodePen',
  },
]

function SvgIcon({ component, ...props }) {
  const SvgIcon = component
  return <SvgIcon {...props} />
}

export default function Footer() {
  return (
    <footer className="footer__grid">
      <div className="footer__flex">
        <div className="footer__copyright">
          <SvgCopyright width="14" height="14" />
          <p>{new Date().getFullYear()} — Rajala.dev</p>
        </div>
        <div className="footer__icons">
          {links.map((link, i) => (
            <CustomLink
              href={link.url}
              key={i}
              ariaLabel={link.name}
              className="icon-link">
              <SvgIcon
                component={link.icon}
                width="32"
                height="32"
                aria-hidden="true"
                focusable="false"
              />
            </CustomLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
