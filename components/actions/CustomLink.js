import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Render Link differently based on if it's internal/external
export default function CustomLink({ href, locale, className = '', children }) {
  const router = useRouter()
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} locale={locale ? locale : router.locale}>
        <a className={cx('internal-link', className)}>{children}</a>
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cx('external-link', className)}>
      {children}
    </a>
  )
}
