import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
export const siteTitle = 'Rajala.dev';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <article className="content-grid">{children}</article>
      <Footer />
    </>
  );
}
