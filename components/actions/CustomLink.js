import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Render Link differently based on if it's internal/external
export default function CustomLink({ href, locale, className = '', ariaLabel, children }) {
  const router = useRouter()
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const baseClass = isInternalLink ? 'internal-link' : 'external-link'
  const linkProps = {
    className: cx(baseClass, className),
  }

  if (ariaLabel) {
    linkProps['aria-label'] = ariaLabel
  }
  
  if (isInternalLink) {
    return (
      <Link href={href} locale={locale ? locale : router.locale}>
        <a {...linkProps}>{children}</a>
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...linkProps}>
      {children}
    </a>
  )
}
