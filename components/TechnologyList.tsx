import Tag from '@/components/Tag'

import SvgJS from '@/svgs/icons/js.svg'
import SvgCSS from '@/svgs/icons/css.svg'
import SvgFigma from '@/svgs/icons/figma.svg'
import { SvgIcon } from '@/types/svg.types';

const icons: Record<'js' | 'css' | 'figma', SvgIcon> = {
   js: SvgJS,
   css: SvgCSS,
   figma: SvgFigma,
};

interface TechnologyListProps {
   title: string;
   icon: 'js' | 'css' | 'figma';
   items: string[];
}

export default function TechnologyList({ title, icon, items }: TechnologyListProps) {
   const Icon: SvgIcon = icons[icon]

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
