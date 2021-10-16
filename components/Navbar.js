import Link from 'next/link';
import Logo from '../svgs/logo.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__grid">
        <div>
          <Link href="/">
            <a>
              <Logo width="23" height="23" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
