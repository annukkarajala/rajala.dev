import Head from 'next/head';
import Link from 'next/link';

import AboutMe from '../components/AboutMe';
import Button from '../components/Button';
import Introduction from '../components/Introduction';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/ProjectCard';
import HandWave from '../svgs/handwave.svg';
import HeroBg from '../svgs/hero-bg.svg';
import HeroImg from '../svgs/hero-img.svg';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="content-grid__full alternate home">
        <div className="home__bg">
          <HeroBg />
        </div>
        <div className="content-grid__contained">
          <div className="home__flex">
            <div>
              <Introduction
                svg={<HandWave />}
                firstRow="Moikka!"
                secondRow="Olen Annukka, frontend-kehittäjä"
              />
              <div className="home__intro">
                <h1 className="bigger">
                  Koodia ja designia
                  <br />
                  käsi kädessä
                </h1>
                <p>
                  Web-käyttöliittymien suunnittelu ja toteutus ovat lähellä sydäntä. Vahvinta
                  osaamis&shy;alaani ovat React, SCSS ja Figma. Opiskelen kolmatta vuotta Jyväskylän
                  ammatti&shy;korkea&shy;koulussa.
                </p>
                <Button href="/projektit" name="Projektit" icon />
                <Button href="#lisaa-minusta" name="Lisää minusta" type="secondary" />
              </div>
            </div>

            <div className="home__illustration">
              <HeroImg />
            </div>
          </div>
        </div>
      </header>
      <section className="content-grid__full alternate">
        <div className="content-grid__contained">
          <h2 className="bigger">Tuorein työnäyte</h2>
          <ProjectCard href="/projektit/norma" />
          <div className="justify-center button-container">
            <Button href="/projektit" name="Kaikki projektit" icon />
          </div>
        </div>
      </section>
      <section id="lisaa-minusta" className="content-grid__full alternate">
        <div className="content-grid__contained spacing-bottom">
          <h2 className="bigger">Lisää minusta</h2>
          <AboutMe />
        </div>
      </section>
    </Layout>
  );
}
