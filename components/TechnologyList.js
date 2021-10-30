import Tag from './Tag'
import SvgJS from '../svgs/icons/js.svg'
import SvgCSS from '../svgs/icons/css.svg'
import SvgFigma from '../svgs/icons/figma.svg'

export default function TechnologyList({ title, icon, items }) {
  const iconTypes = {
    js: SvgJS,
    css: SvgCSS,
    figma: SvgFigma,
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
