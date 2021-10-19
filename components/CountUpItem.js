import { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function CountUpItem({ start, end, duration, ...props }) {
  const [inViewport, setInViewport] = useState(false)

  return (
    <CountUp
      start={inViewport ? null : start ? start : 0}
      end={end}
      duration={duration}
      {...props}>
      {({ countUpRef }) => (
        <>
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible) {
                setInViewport(true)
              }
            }}>
            <span ref={countUpRef} className="stats-number" />
          </VisibilitySensor>
        </>
      )}
    </CountUp>
  )
}
