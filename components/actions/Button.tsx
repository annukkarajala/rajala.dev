import Link from 'next/link'

interface ButtonProps {
  href: string
  type: 'primary' | 'secondary'
  children: string
}

/**
 * Button component is actually a link styled as a button.
 * It navigates to another page/section.
 */
export default function Button({
  href,
  type = 'primary',
  children,
}: ButtonProps) {
  return (
    <Link href={href}>
      <a className={`button button--${type}`}>{children}</a>
    </Link>
  )
}
