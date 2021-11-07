import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '@/components/Layout'
// import CustomLink from '@/components/actions/CustomLink'
// import LazyImage from '@/components/LazyImage'
// import LazyVideo from '@/components/LazyVideo'

// import SvgContactLetter from '@/svgs/illustr/contact-letter.svg'

export default function WIMMALab() {
  return (
    <Layout>
      <Head>
        <title>WIMMA Lab — {siteTitle}</title>
      </Head>
      <header className="full hero project-header norma">
        <div className="contained">
          <div className="hero__content">
            <h1>WIMMA Lab — nettisivujen uudistus Next.js:llä</h1>
            <p className="big-p">
              Frontend-kehitys, UI-suunnittelu
              <span className="separator">•</span>
              2021
            </p>
          </div>
          <div className="cover__outer-container">
            <div className="cover__inner-container">
              <Image
                alt="WIMMA Lab: kansikuva"
                src="/assets/wimmalab/cover2.png"
                width={1125}
                height={734}
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
            <p className="big-p">Tulossa pian!</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
