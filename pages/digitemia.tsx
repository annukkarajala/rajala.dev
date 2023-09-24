import Head from 'next/head'
import Image from 'next/image'

import CustomLink from '@/components/actions/CustomLink'
import Layout, { siteTitle } from '@/components/Layout'
import LazyImage from '@/components/LazyImage'

import SvgContactLetter from '@/svgs/illustr/contact-letter.svg'

export default function Digitemia() {
  return (
    <Layout>
      <Head>
        <title>Digitemia — {siteTitle}</title>
      </Head>
      <header className="full hero project-header digitemia">
        <div className="contained">
          <div className="hero__content">
            <h1>Digitemia — automatisoitu harrastamisen alusta</h1>
            <p className="big-p">
              Frontend-kehitys, UI-suunnittelu
              <span className="separator">•</span>
              2022
            </p>
          </div>
          <div className="cover__outer-container">
            <div className="cover__inner-container">
              <Image
                alt="Digitemia: kansikuva"
                src="/assets/digitemia/cover2.png"
                width={1125}
                height={587}
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
              <span className="h2-subheading">
                WIP — lisää tulossa myöhemmin
              </span>
            </h2>
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
