import cx from 'classnames'

export default function Tag({ type, text }) {
  let className = cx('tag', {
    [`tag--${type}`]: type,
  })

  return <span className={className}>{text}</span>
}
