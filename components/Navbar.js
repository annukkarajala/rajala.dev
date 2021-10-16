import Link from 'next/link';
import Logo from '../svgs/logo.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">
        <a className="navbar__logo">
          <Logo width="21" height="23" />
          <span>Rajala.dev</span>
        </a>
      </Link>
    </div>
  );
}
