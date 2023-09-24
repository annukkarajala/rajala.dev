import cx from 'classnames'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

export default function LazyImage(props: ImageProps) {
  const [isReady, setIsReady] = useState(false)

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
