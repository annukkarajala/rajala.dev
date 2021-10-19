import Tag from './Tag'

import SvgJSIcon from '../svgs/js-icon.svg'
import SvgCSSIcon from '../svgs/css-icon.svg'
import SvgFigmaIcon from '../svgs/figma-icon.svg'

export default function TechnologyList({ title, icon, items }) {
  const iconTypes = {
    'js-icon': SvgJSIcon,
    'css-icon': SvgCSSIcon,
    'figma-icon': SvgFigmaIcon,
  }

  const Icon = iconTypes[icon]

  return (
    <div className="technology-list__container">
      <div className="technology-list__title">
        <Icon width="24" height="24" />
        <h3>{title}</h3>
      </div>
      <div className="tag__container">
        {items.map((item, i) => (
          <Tag key={i} text={item} />
        ))}
      </div>
    </div>
  )
}
