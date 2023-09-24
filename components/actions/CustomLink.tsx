import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface CustomLinkProps {
   href: string;
   locale?: string;
   className?: string;
   ariaLabel?: string;
   children: React.ReactNode;
}

/**
 * Renders a link differently based on if it's internal/external.
 */
export default function CustomLink({
   href,
   locale,
   className = '',
   ariaLabel,
   children
}: CustomLinkProps) {
  const router = useRouter()
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const baseClass = isInternalLink ? 'internal-link' : 'external-link'
  const linkProps: Record<string, string> = {
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
