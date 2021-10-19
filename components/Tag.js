import cx from 'classnames'

export default function Tag({ type, text }) {
  let tagClass = cx('tag', {
    'tag--role': type === 'role',
  })

  return <span className={tagClass}>{text}</span>
}
