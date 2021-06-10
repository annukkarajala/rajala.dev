import Head from 'next/head';
import Link from 'next/link';

import Date from '../../components/Date';
import Layout, { siteTitle } from '../../components/Layout';
import { getSortedPostsData } from '../../lib/blog';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Blogi({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blogi — {siteTitle}</title>
      </Head>
      <section>
        <h2>Blogi</h2>
        <ul>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <li key={id}>
              <small>
                <Date dateString={date} />
              </small>
              <br />
              <Link href={`/blogi/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <p>{excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
