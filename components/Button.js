import Link from 'next/link';

import ArrowIcon from '../svgs/arrow-narrow-right.svg';

// Actually a link styled as a button, navigates to another page/section
export default function Button({ href, name, type = 'primary', icon }) {
  return (
    <Link href={href}>
      <a className={`button button--${type}`}>
        {name}
        {icon && <ArrowIcon className="icon-right" />}
      </a>
    </Link>
  );
}
