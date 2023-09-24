import * as React from 'react'
import cx from 'classnames'
import Image, { ImageProps } from 'next/image'

export default function LazyImage(props: ImageProps) {
  const [isReady, setIsReady] = React.useState(false)

  return (
    <div className="skeleton">
      <Image
        onLoad={() => setIsReady(true)}
        className={cx('lazy__fadein', { lazy__loaded: isReady })}
        alt={props.alt}
        {...props}
      />
    </div>
  )
}
