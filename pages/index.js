import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/Layout';

import Button from '../components/buttons/Button';
import ProjectCard from '../components/ProjectCard';
import TechnologyList from '../components/TechnologyList';

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
                <p className="big-p">
                  Olen koodari, jolta löytyy myös visuaalista silmää. Etenkin web-käyttöliittymien suunnittelu ja toteutus ovat lähellä sydäntä. Vahvinta osaamistani ovat modernit JavaScript-sovelluskehykset ja CSS.
                </p>
                <div className="hero__actions">
                  <Button href="#about-me" name="Lisää minusta" type="primary" />
                  <Button href="#contact" name="Ota yhteyttä" type="secondary" />
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
      <section id="projects" className="content-grid__full projects">
        <div className="content-grid__contained">
          <div className="h2-container">
            <h2>Projektit</h2>
            <p className="big-p">Pieniä ja suuria projekteja. Töissä tai vapaa-ajalla, yksin tai osana tiimiä.</p>
          </div>
          <div className="projects__container">
            <ProjectCard
              href="/norma"
              year="2021"
              name="Norma"
              title="käyttö&shy;liittymä sääntöjen konfigurointiin"
              labels={['Frontend-kehitys', 'UI-suunnittelu']}
              tags={['React', 'SCSS', 'Figma']}
              src="norma/norma-cover.png"
            >
              Bonskyltä saadussa toimeksiannossa haluttiin selain&shy;käyttö&shy;liittymä, jossa
              käyttäjä voi selata sääntöjä ja tehdä niihin muutoksia. Muutosten versiohistoria
              tuli säilyttää. Lopputuloksena syntyi työkalu, jota voivat käyttää sekä asiakkaat
              että yritys itse.
            </ProjectCard>
          </div>
        </div>
      </section>
      <section id="about-me" className="content-grid__full about-me">
        <div className="content-grid__contained">
          <div className="h2-container">
            <h2>Lisää minusta</h2>
            <p className="big-p">Elämäntapakoodaaja, joka uppoutuu mielellään myös ruoanlaittoon, liikuntaan tai viherkasvien hoitoon.</p>
          </div>
          <div className="about-me__container">
            <div className="about-me__image-container">
              <Image
                src="/assets/profile.png"
                alt="Annukka Rajala"
                width={445}
                height={445}
                className="about-me__image"
              />
            </div>
            <div className="about-me__content">
              <p>Vuosi oli ehkä 2009, kun päätin koodata omat netti­sivut. Huomasin pian, että web-kehitys on koukuttava sekoitus luovaa työtä ja ongelman­ratkaisua. Jatkoin netti­sivujen rakentelua, ja koodaaminen alkoi vetää puoleensa eri tavalla kuin muut harrastukset. Urapolkua valitessa web-kehitys tuntui itsestäänselvältä.</p>
              <p>Alla muutamia teknologioita ja työkaluja, joiden parissa olen työskennellyt viime aikoina.</p>
              <div className="about-me__technologies">
                <TechnologyList
                  title="JavaScript"
                  icon="js-icon"
                  items={['Vue', 'Nuxt', 'React', 'Next.js', 'React Native']}
                />
                <TechnologyList
                  title="HTML/CSS"
                  icon="css-icon"
                  items={['HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']}
                />
                <TechnologyList
                  title="UI-suunnittelu"
                  icon="figma-icon"
                  items={['Figma', 'Illustrator', 'Photoshop']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="content-grid__full">
        <div className="content-grid__contained spacing-bottom">
          <SvgContactLetter />
          <h2>Ota yhteyttä</h2>
          <p className="big-p">Jos haluat jutella, laita postia osoitteeseen <a href="mailto:annukka@rajala.dev">annukka@rajala.dev</a> tai ota yhteyttä <a
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
