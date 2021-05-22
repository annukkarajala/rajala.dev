import Head from 'next/head';

import Introduction from '../../components/Introduction';
import Layout, { siteTitle } from '../../components/layout';
import ProjectCard from '../../components/ProjectCard';
import Diamond from '../../svgs/icon-diamond.svg';

export default function Projektit() {
  return (
    <Layout>
      <Head>
        <title>Projektit — {siteTitle}</title>
      </Head>
      <section className="content-grid__full alternate projects">
        <div className="content-grid__contained">
          <Introduction
            svg={<Diamond />}
            firstRow="Portfolio:"
            secondRow="Tutustu työnäytteisiini"
            className="diamond"
          />
          <h1 className="bigger">Projektit</h1>
          <ProjectCard href="/projektit/norma" />
        </div>
      </section>
    </Layout>
  );
}
