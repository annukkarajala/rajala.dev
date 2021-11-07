import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '@/components/Layout'
import CustomLink from '@/components/actions/CustomLink'
import LazyImage from '@/components/LazyImage'
import LazyVideo from '@/components/LazyVideo'

export default function Norma() {
  return (
    <Layout>
      <Head>
        <title>Norma — {siteTitle}</title>
      </Head>
      <header className="full hero project-header norma">
        <div className="contained">
          <div className="hero__content">
            <h1>Norma — käyttö&shy;liittymä sääntöjen konfigurointiin</h1>
            <p className="big-p">
              Frontend-kehitys, UI-suunnittelu
              <span className="separator">•</span>
              2021
            </p>
          </div>
          <div className="cover__outer-container">
            <div className="cover__inner-container">
              <Image
                alt="Norma: kansikuva"
                src="/assets/norma/cover.png"
                width={1120}
                height={630}
                quality={100}
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
              Jyväskylän ammatti&shy;korkea&shy;koulun
              yritys&shy;projekti&shy;opinto&shy;jaksolla muodostettu
              Avalor-projekti&shy;ryhmä kehitti selain&shy;käyttö&shy;liittymän
              sääntöjen konfigurointiin. Normassa käyttäjä voi selata, hakea ja
              suodattaa sääntöjä sekä muokata tiettyjä osia säännöistä.
              JSON-muotoiset sääntöjen konfiguraatio&shy;tiedostot noudetaan
              version&shy;hallinta&shy;järjestelmästä, ja käyttäjän tekemät
              muutokset viedään Git-committeina takaisin
              version&shy;hallinta&shy;järjestelmään.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="project-h2">
          <span className="h2-subheading">Tavoitteet</span>
          Käyttäjä&shy;ystävällinen tapa sääntöjen yllä&shy;pitoon
        </h2>
        <div>
          <p>
            <CustomLink href="https://bonsky.com/" className="project-link">
              Bonsky Digital Oy
            </CustomLink>{' '}
            (liittyi osaksi{' '}
            <CustomLink href="https://www.vincit.fi/" className="project-link">
              Vincit Oyj
            </CustomLink>
            :tä 1.5.2021) suunnittelee ja toteuttaa mm. sähköisiä
            asiointi&shy;palveluja, verkko&shy;palveluja,
            B2B-tilaus&shy;järjestelmiä sekä tuote&shy;tieto&shy;ratkaisuja.
            Rules engine on Bonskyn mikro&shy;palvelu&shy;arkki&shy;tehtuurissa
            käyttämä ratkaisu, jota hyödynnetään mm. järjestelmien ja
            tuote&shy;tieto&shy;pankkien välisten tieto&shy;mallien mäppäykseen
            sekä datan muunnoksiin ja vertailuun.
          </p>
          <p>
            Bonskyltä saadussa toimeksi&shy;annossa pää&shy;tavoitteena oli
            helpottaa sääntöjen konfigurointia. Avalor-projekti&shy;ryhmän
            tehtävänä oli kehittää selain&shy;käyttö&shy;liittymä, jonka avulla
            käyttäjä voi selata sääntöjä ja tehdä niihin muutoksia. Muutosten
            versio&shy;historia tuli säilyttää. Loppu&shy;tuloksena haluttiin
            siis hallinta&shy;työkalu, jota voivat käyttää sekä asiakkaat että
            yritys itse.
          </p>
          <p>
            Norma toteutettiin MERN-stackilla (React, Node.js, Express ja
            MongoDB) ja SCSS:llä. Käyttö&shy;liittymä suunniteltiin Figmassa, ja
            projekti&shy;työskentelyssä hyödynnettiin ketteriä menetelmiä.
          </p>
        </div>
      </section>

      <section className="full bg-alt">
        <div className="contained">
          <h2 className="project-h2">
            <span className="h2-subheading">Suunnittelu</span>
            Käyttö&shy;liittymän kehitys Figmassa
          </h2>
          <div className="figma-container">
            <figure>
              <a href="/assets/norma/norma-figma-v1.png" target="_blank">
                <LazyImage
                  alt="Figma v1.0: rautalankamallit"
                  src="/assets/norma/norma-figma-v1.png"
                  width={940}
                  height={660}
                  quality={100}
                  layout="responsive"
                />
              </a>
              <figcaption>Figma v1.0: rautalankamallit</figcaption>
            </figure>
            <figure>
              <a href="/assets/norma/norma-figma-v2.png" target="_blank">
                <LazyImage
                  alt="Figma v2.0: käyttöliittymä"
                  src="/assets/norma/norma-figma-v2.png"
                  width={940}
                  height={660}
                  quality={100}
                  layout="responsive"
                />
              </a>
              <figcaption>Figma v2.0: käyttöliittymä</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="full">
        <div className="contained">
          <LazyVideo
            url="/assets/norma/norma-01_saannon-hakeminen.mp4"
            caption="Lopullinen käyttöliittymä: säännön hakeminen ja tietojen tarkastelu"
          />
        </div>
      </section>

      <section>
        <h2 className="project-h2">
          <span className="h2-subheading">Haasteet</span>
          Moni&shy;mutkaisen JSON-datan käsittely front&shy;endissä
        </h2>
        <div>
          <p>
            Sääntöjen konfiguraatiotiedostojen JSON-objektien määrä ja rakenne
            vaihteli paljon. Yksi projektin merkittävimmistä haasteista oli,
            miten backendistä saatava sääntödata voidaan esittää
            käyttöliittymässä järkevällä tavalla.
          </p>
          <p>
            Hyödynsin sääntöjen tietojen esittämisessä rekursiivista
            renderöintiä. Esimerkiksi säännön ehtojen ANY ja ALL -osiot puretaan
            auki omina kokonaisuuksinaan, tarpeen mukaan sisäkkäin
            ketjutettuina. Osioiden lapsikomponenteille määrätään objektien
            avaimien ja rakenteen perusteella tiettyjä tyylimäärittelyjä. Näin
            muodostuu puumainen hierarkia, joka havainnollistaa ehtojen suhteita
            toisiinsa.
          </p>
          <p>
            Toisinaan sääntöihin liittyvät avain-arvo -parien listat olivat
            satojen tai tuhansien rivien pituisia. Sovellusta testatessa
            huomasimme, että pisimmät listat aiheuttivat merkittäviä
            suorituskykyongelmia. Perehdyin aiheeseen, ja react-window-pakettia
            hyödyntämällä sekä ylimääräisiä re-rendereitä rajoittamalla paransin
            listojen suorituskykyä huomattavasti.
          </p>
        </div>
      </section>

      <section className="full bg-alt">
        <div className="contained spacing-bottom">
          <LazyVideo
            url="/assets/norma/norma-02_teeman-kustomointi.mp4"
            caption="Käyttöliittymän kustomointi: värivariaatiot tallennetaan tietokantaan ja tuodaan CSS-muuttujina sovellukseen"
          />
        </div>
        <div className="contained">
          <LazyVideo
            url="/assets/norma/norma-03_filtterit.mp4"
            caption="Sääntöjen filtteröinti tiettyjen avain-arvo -parien perusteella"
          />
        </div>
      </section>

      <section className="spacing-bottom">
        <h2 className="project-h2">
          <span className="h2-subheading">Mitä opin</span>
          Erinomaiset eväät tuleviin projekteihin
        </h2>
        <div>
          <p>
            Toimeksianto tuntui haastavalta, mutta tartuimme tarmokkaasti
            haasteeseen. Pidin etenkin käyttöliittymän suunnittelusta ja
            toteutuksesta, joten oli mahtava kuulla, että lopputulos ylitti
            kaikki odotukset.
          </p>
          <p>
            Projekti huipentui intensiiviseen kahden kuukauden koodausjaksoon,
            joka opetti paljon. Pääsin syventymään Reactiin, ja aiemmin
            hämmennystä aiheuttanut JSON-datan käsittely tuli tutuksi. Loistavan
            ryhmäilmapiirin ja tekemisen meiningin ansiosta tavoitteet
            saavutettiin kevyesti ja toimeksiantaja oli tyytyväinen.
            <span aria-hidden="true"> 🤘</span>
          </p>
        </div>
      </section>
    </Layout>
  )
}
