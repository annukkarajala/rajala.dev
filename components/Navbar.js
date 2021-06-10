import Link from 'next/link';
import { useEffect, useState } from 'react';

import Logo from '../svgs/logo.svg';
import Menu from './Menu';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [active]);

  return (
    <div className="navbar">
      <Link href="/">
        <a className="navbar__logo">
          <Logo width="21" height="23" />
          <span>Rajala.dev</span>
        </a>
      </Link>
      <Menu active={active} handleClick={handleClick} />
    </div>
  );
}
