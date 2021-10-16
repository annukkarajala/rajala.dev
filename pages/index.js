import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

import Button from '../components/buttons/Button';
import ProjectCard from '../components/ProjectCard';

import SvgHandWave from '../svgs/handwave.svg';
import SvgDevelopment from '../svgs/development.svg';
import SvgContactLetter from '../svgs/contact-letter.svg';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Etusivu · {siteTitle}</title>
      </Head>
      <header className="content-grid__full hero">
        <div className="content-grid__contained">
          <div className="hero__flex">
            <div>
              <div className="hero__greeting">
                <SvgHandWave width="40" height="42" />
                <p>
                  Moikka!<br />
                  Olen Annukka, frontend-kehittäjä
                </p>
              </div>
              <div className="hero__content">
                <h1>
                  Koodia ja designia<br />
                  käsi kädessä
                </h1>
                <p>
                  Olen koodari, jolta löytyy myös visuaalista silmää. Etenkin web-käyttöliittymien suunnittelu ja toteutus ovat lähellä sydäntä. Vahvinta osaamistani ovat modernit JavaScript-sovelluskehykset ja CSS.
                </p>
                <div className="hero__actions">
                  <Button href="/" name="Lisää minusta" type="primary" />
                  <Button href="/" name="Ota yhteyttä" type="secondary" />
                </div>
              </div>
            </div>

            <div className="hero__image">
              <div className="hero__svg-wrapper">
                <SvgDevelopment />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="projects" className="content-grid__full">
        <div className="content-grid__contained">
          <h2>Projektit</h2>
          <p>Pieniä ja suuria projekteja. Töissä tai vapaa-ajalla, yksin tai osana tiimiä.</p>
          <ProjectCard href="/norma" />
        </div>
      </section>
      <section id="about-me" className="content-grid__full">
        <div className="content-grid__contained spacing-bottom">
          <h2>Lisää minusta</h2>
          <p>Elämäntapakoodaaja, joka uppoutuu mielellään myös ruoanlaittoon, liikuntaan tai viherkasvien hoitoon.</p>
          <div>
            <p>Vuosi oli ehkä 2009, kun päätin koodata omat netti­sivut. Huomasin pian, että web-kehitys on koukuttava sekoitus luovaa työtä ja ongelman­ratkaisua. Jatkoin netti­sivujen rakentelua, ja koodaaminen alkoi vetää puoleensa eri tavalla kuin muut harrastukset. Urapolkua valitessa web-kehitys tuntui itsestäänselvältä.</p>
            <p>Alla muutamia teknologioita ja työkaluja, joiden parissa olen työskennellyt viime aikoina.</p>
            <div>
            <div></div>
            <div></div>
            <div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="content-grid__full">
        <div className="content-grid__contained spacing-bottom">
          <SvgContactLetter />
          <h2>Ota yhteyttä</h2>
          <p>Jos haluat jutella, laita postia osoitteeseen <a href="mailto:annukka@rajala.dev">annukka@rajala.dev</a> tai ota yhteyttä <a
            href="https://www.linkedin.com/in/annukkarajala/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>issä.</p>
        </div>
      </section>
    </Layout>
  );
}
