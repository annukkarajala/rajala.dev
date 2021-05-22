import Image from 'next/image';
import Link from 'next/link';

import IconFigma from '../svgs/icon-figma.svg';
import IconReact from '../svgs/icon-react.svg';
import IconSCSS from '../svgs/icon-sass.svg';
import LazyImage from './lazyImage';

export default function ProjectCard({ href }) {
  return (
    <Link href={href}>
      <a>
        <div className="project-card">
          <div className="project-card__desc">
            <small>
              2021{' '}
              <span className="small-additional">
                <span className="separator">•</span> Frontend-kehitys &amp; UI/UX-suunnittelu
              </span>
            </small>
            <h3>Norma — käyttö&shy;liittymä sääntöjen konfigurointiin</h3>
            <p className="project-card__description">
              Bonskyltä saadussa toimeksiannossa haluttiin selain&shy;käyttö&shy;liittymä, jossa
              käyttäjä voi selata sääntöjä ja tehdä niihin muutoksia. Muutosten versio&shy;historia
              tuli säilyttää. Loppu&shy;tuloksena syntyi työkalu, jota voivat käyttää sekä asiakkaat
              että yritys itse.
            </p>

            <div className="tag__container">
              <span className="tag">
                <IconReact fill="currentColor" />
                <span className="tag__title">React</span>
              </span>
              <span className="tag">
                <IconSCSS />
                <span className="tag__title">SCSS</span>
              </span>
              <span className="tag">
                <IconFigma />
                <span className="tag__title">Figma</span>
              </span>
            </div>
          </div>

          <div className="project-card__image">
            <div className="project-card__img-outer-container">
              <div className="project-card__img-inner-container">
                <LazyImage
                  alt="Norma: kansikuva"
                  src="/assets/norma/norma-cover.png"
                  width={1024}
                  height={576}
                  quality={100}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
