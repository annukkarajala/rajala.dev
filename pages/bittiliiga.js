import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '@/components/Layout'
import CustomLink from '@/components/actions/CustomLink'
import LazyImage from '@/components/LazyImage'

import SvgContactLetter from '@/svgs/illustr/contact-letter.svg'

export default function Bittiliiga() {
  return (
    <Layout>
      <Head>
        <title>Bittiliiga — {siteTitle}</title>
      </Head>
      <header className="full hero project-header bittiliiga">
        <div className="contained">
          <div className="hero__content">
            <h1>Bittiliiga — eSports-turnaus&shy;alusta nuorille</h1>
            <p className="big-p">
              Frontend-kehitys, UI-suunnittelu
              <span className="separator">•</span>
              2021
            </p>
          </div>
          <div className="cover__outer-container">
            <div className="cover__inner-container">
              <Image
                alt="Bittiliiga: kansikuva"
                src="/assets/bittiliiga/cover2.png"
                width={1125}
                height={567}
                quality={90}
                priority={true}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="full project-intro">
        <div className="contained">
          <div className="project-intro__container">
            <h2>
              <span className="h2-subheading">Kuvaus</span>
            </h2>
            <p className="big-p">
              Koronan tuomien etäsuositusten myötä syntyi kasvava tarve etänä
              järjestettävälle nuorisotoiminnalle. Bittiliiga on Muuramesta
              vuonna 2020 ponnistanut maksuton joukkuepelaamisen
              eSports-harrastajaliiga nuorille ja nuorille aikuisille, joka
              vastaa tähän tarpeeseen. Tärkeimpänä pelinä on CS:GO, jonka
              lisäksi pelitarjonnasta löytyy mm. League of Legends, Valorant ja
              Rocket League.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="project-h2">
          <span className="h2-subheading">Tavoitteet</span>
          Modulaarinen eSports-turnausalusta
        </h2>
        <div>
          <p>
            Bittiliiga-alustalla nuori voi liittyä tiimiin ja osallistua
            turnauksiin. Tiimin jäsen näkee tiiminsä tulevat ottelut, ja
            peliserverille liittyminen tapahtuu Bittiliigan lobbyn kautta.
            Otteluiden tilastot tallennetaan ja ne ovat tarkasteltavissa
            jälkeenpäin.
          </p>
          <p>
            Roolini Bittiliigassa oli kehittää käyttöliittymän visuaalista
            ilmettä sekä laajentaa alustaa uusilla ominaisuuksilla frontendin
            puolella. Uuden ilmeen lisäksi toteutin mm. turnausten lohkokaaviot,
            ilmoitukset sekä laajan admintyökalujen uudistuksen.
          </p>
          <p>
            Bittiliiga on rakennettu Nuxt 2:lla, ja käyttöliittymässä on
            hyödynnetty kustomoitua Vuetify-komponenttikirjastoa. Kommunikointi
            backendin kanssa tapahtuu FeathersJS:n kautta.
          </p>
        </div>
      </section>

      <section className="full bg-alt">
        <div className="contained">
          <h2 className="project-h2">
            <span className="h2-subheading">Suunnittelu</span>
            Käyttöliittymän kehittäminen
          </h2>
          <div className="figma-container">
            <figure>
              <a
                href="/assets/bittiliiga/bittiliiga-before.png"
                target="_blank">
                <LazyImage
                  alt="Alkuperäinen käyttöliittymä"
                  src="/assets/bittiliiga/bittiliiga-before.png"
                  width={940}
                  height={474}
                  quality={90}
                  layout="responsive"
                />
              </a>
              <figcaption>Alkuperäinen käyttöliittymä</figcaption>
            </figure>
            <figure>
              <a href="/assets/bittiliiga/bittiliiga-figma.png" target="_blank">
                <LazyImage
                  alt="Ensimmäiset suunnitelmat Figmassa"
                  src="/assets/bittiliiga/bittiliiga-figma.png"
                  width={940}
                  height={474}
                  quality={90}
                  layout="responsive"
                />
              </a>
              <figcaption>Ensimmäiset suunnitelmat Figmassa</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="full">
        <div className="contained">
          <LazyImage
            alt="Turnauksen lohkokaaviot"
            src="/assets/bittiliiga/bittiliiga-lohkokaaviot.png"
            width={1125}
            height={567}
            quality={90}
            layout="responsive"
          />
          <figcaption>
            Turnausten lohkokaaviot päivittyvät dynaamisesti sitä mukaa, kun
            otteluita pelataan
          </figcaption>
        </div>
      </section>

      <section className="full">
        <div className="contained">
          <LazyImage
            alt="Admintyökalut"
            src="/assets/bittiliiga/bittiliiga-admin.png"
            width={1125}
            height={567}
            quality={90}
            layout="responsive"
          />
          <figcaption>
            Admintyökalujen avulla voidaan vaivattomasti hallita alustan
            sisältöä
          </figcaption>
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
