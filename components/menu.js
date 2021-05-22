import cx from 'classnames';
import Link from 'next/link';

import ActiveLink from './ActiveLink';

export default function Menu({ active, handleClick }) {
  return (
    <nav role="navigation">
      <div className="desktop-menu">
        <ul className="desktop-menu__links">
          <li>
            <ActiveLink activeClassName="active" href="/">
              <a>Etusivu</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/projektit">
              <a>Projektit</a>
            </ActiveLink>
          </li>
          {/* <li>
            <ActiveLink activeClassName="active" href="/blogi">
              <a>Blogi</a>
            </ActiveLink>
          </li> */}
        </ul>
      </div>
      <div className="burger-menu">
        <div className={cx('burger-menu__container', { closed: !active })}>
          <ul className="burger-menu__main-links">
            <li>
              <Link href="/">
                <a>Etusivu</a>
              </Link>
            </li>
            <li>
              <Link href="/projektit">
                <a>Projektit</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/blogi">
                <a>Blogi</a>
              </Link>
            </li> */}
          </ul>
          <ul className="burger-menu__outgoing-links">
            <li>
              <a
                href="https://www.linkedin.com/in/annukkarajala/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:annukka@rajala.dev">Email</a>
            </li>
          </ul>
        </div>
        <button
          aria-expanded="false"
          onClick={handleClick}
          className={cx('burger-menu__icon', { active: active })}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
