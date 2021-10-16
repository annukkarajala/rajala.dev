import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';

export const siteTitle = 'Rajala.dev';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="content-grid">{children}</div>
      <Footer />
    </>
  );
}
