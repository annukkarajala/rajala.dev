import cx from 'classnames'

type TagType = 'role' | 'default'

interface TagProps {
  type?: TagType
  text: string
}

export default function Tag({ type, text }: TagProps) {
  const className = cx('tag', {
    [`tag--${type}`]: type,
  })

  return <span className={className}>{text}</span>
}
