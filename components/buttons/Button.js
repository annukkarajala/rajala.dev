import Link from 'next/link'

// Actually a link styled as a button,
// navigates to another page/section
export default function Button({ href, name, type = 'primary' }) {
  return (
    <Link href={href}>
      <a className={`button button--${type}`}>{name}</a>
    </Link>
  )
}
