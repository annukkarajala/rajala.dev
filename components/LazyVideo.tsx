import * as React from 'react'
import cx from 'classnames'
import ReactPlayer from 'react-player/file'

interface LazyVideoProps {
  url: string
  caption: string
}

export default function LazyVideo({ url, caption }: LazyVideoProps) {
  const [isReady, setIsReady] = React.useState(false)

  return (
    <figure className={cx('video lazy__fadein', { lazy__loaded: isReady })}>
      <div className="video__wrapper">
        <ReactPlayer
          className="video__player"
          width="100%"
          height="100%"
          onReady={() => setIsReady(true)}
          playing
          volume={0}
          muted
          loop
          url={url}
          fallback={<p>fallback</p>}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
