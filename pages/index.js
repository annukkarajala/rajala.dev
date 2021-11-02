import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '@/components/Layout'

import Button from '@/components/actions/Button'
import CustomLink from '@/components/actions/CustomLink'
import ProjectCard from '@/components/ProjectCard'
import TechnologyList from '@/components/TechnologyList'

import SvgHandWave from '@/svgs/handwave.svg'
import SvgDevelopment from '@/svgs/illustr/development.svg'
import SvgContactLetter from '@/svgs/illustr/contact-letter.svg'

const projects = [
  {
    name: 'Norma',
    slug: 'norma',
    year: 2021,
    title: 'käyttöliittymä sääntöjen konfigurointiin',
    tags: {
      roles: ['Frontend-kehitys', 'UI-suunnittelu'],
      tech: ['React', 'SCSS', 'Figma'],
    },
    desc: 'Bonskyltä saadussa toimeksiannossa haluttiin käyttöliittymä, jossa käyttäjä voi selata sääntöjä ja tehdä niihin muutoksia. Muutosten versiohistoria tuli säilyttää. Lopputuloksena syntyi työkalu, jota voivat käyttää sekä asiakkaat että yritys itse.',
  },
  {
    name: 'WIMMA Lab',
    slug: 'wimmalab',
    year: 2021,
    title: 'nettisivujen uudistus Next.js:llä',
    tags: {
      roles: ['Frontend-kehitys', 'UI-suunnittelu'],
      tech: ['React', 'Next.js', 'SCSS', 'Figma', 'Illustrator'],
    },
    desc: 'Toimin tiiminvetäjänä WIMMA Lab -konseptin brändin sekä nettisivujen uudistuksessa. Next.js:llä rakennetulle sivustolle toteutettiin lokalisaatio, ja oppaat-osion sisällön päivittäminen tapahtuu kätevästi Markdown-tiedostoja hyödyntämällä.',
  },
]

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Etusivu · {siteTitle}</title>
      </Head>
      <header className="full hero">
        <div className="contained">
          <div className="hero__flex">
            <div>
              <div className="hero__greeting">
                <SvgHandWave width="40" height="42" />
                <p>
                  Moikka!
                  <br />
                  Olen Annukka, frontend-kehittäjä
                </p>
              </div>
              <div className="hero__content">
                <h1>
                  Koodia ja designia <br />
                  käsi kädessä
                </h1>
                <p className="big-p">
                  Olen koodari, jolta löytyy myös visuaalista silmää.
                  Web-käyttöliittymien suunnittelu ja toteutus ovat lähellä
                  sydäntä. Vahvinta osaamistani ovat modernit
                  JavaScript-sovelluskehykset ja CSS.
                </p>
                <div className="hero__actions">
                  <Button
                    href="#about-me"
                    name="Lisää minusta"
                    type="primary"
                  />
                  <Button
                    href="#contact"
                    name="Ota yhteyttä"
                    type="secondary"
                  />
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
      <section id="projects" className="full projects">
        <div className="contained">
          <div className="h2-container">
            <h2>Projektit</h2>
            <p className="big-p">
              Pieniä ja suuria projekteja. Töissä tai vapaa-ajalla, yksin tai
              osana tiimiä.
            </p>
          </div>
          <div className="projects__container">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                name={project.name}
                slug={project.slug}
                year={project.year}
                title={project.title}
                tags={project.tags}>
                {project.desc}
              </ProjectCard>
            ))}
          </div>
        </div>
      </section>
      <section id="about-me" className="full about-me">
        <div className="contained spacing-bottom">
          <div className="h2-container">
            <h2>Lisää minusta</h2>
            <p className="big-p">
              Elämäntapakoodaaja, joka uppoutuu mielellään myös ruoanlaittoon,
              liikuntaan tai viherkasvien hoitoon.
            </p>
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
              <p>
                Vuosi oli ehkä 2009, kun päätin koodata omat netti­sivut.
                Huomasin pian, että web-kehitys on koukuttava sekoitus luovaa
                työtä ja ongelman­ratkaisua. Jatkoin netti­sivujen rakentelua,
                ja koodaaminen alkoi vetää puoleensa eri tavalla kuin muut
                harrastukset. Urapolkua valitessa web-kehitys tuntui
                itsestäänselvältä.
              </p>
              <p>
                Alla muutamia teknologioita ja työkaluja, joiden parissa olen
                työskennellyt viime aikoina.
              </p>
              <div className="about-me__technologies">
                <TechnologyList
                  title="JavaScript"
                  icon="js"
                  items={['Vue', 'Nuxt', 'React', 'Next.js', 'React Native']}
                />
                <TechnologyList
                  title="HTML/CSS"
                  icon="css"
                  items={['HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']}
                />
                <TechnologyList
                  title="UI-suunnittelu"
                  icon="figma"
                  items={['Figma', 'Illustrator', 'Photoshop']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="full contact">
        <div className="contained">
          <div className="contact__flex">
            <div className="contact__image">
              <div className="contact__svg-wrapper">
                <SvgContactLetter />
              </div>
            </div>
            <div className="contact__content">
              <h2>Ota yhteyttä</h2>
              <p className="big-p">
                Jos haluat jutella, laita postia osoitteeseen{' '}
                <a href="mailto:annukka@rajala.dev">annukka@rajala.dev</a> tai
                ota yhteyttä{' '}
                <CustomLink href="https://www.linkedin.com/in/annukkarajala/">
                  LinkedIn
                </CustomLink>
                issä.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
