import Link from 'next/link';
import Logo from '../svgs/rajaladev-logo.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__grid">
        <Link href="/">
          <a>
            <Logo width="137" height="24" />
          </a>
        </Link>
      </div>
    </div>
  );
}
