import Link from 'next/link';

import Logo from '../svgs/logo.svg';
import Contact from './Contact';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <Contact />
        <div className="footer__flex">
          <div className="footer__info">
            <Logo width="28" height="31" />
            <p>
              <b>Annukka Rajala</b>
              <br />
              Frontend-kehittäjä
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__links-section">
              <h4>Sivut</h4>
              <ul>
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
            </div>
            <div className="footer__links-section">
              <h4>Linkit</h4>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/annukkarajala/"
                    target="_blank"
                    rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/annukkarajala"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/arajala" target="_blank" rel="noopener noreferrer">
                    CodePen
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/arajala" target="_blank" rel="noopener noreferrer">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} — rajala.dev</small>
        </div>
      </div>
    </footer>
  );
}
