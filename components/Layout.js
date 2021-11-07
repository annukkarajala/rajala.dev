import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const siteTitle = 'Rajala.dev'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="content-grid">{children}</div>
      <Footer />
    </>
  )
}
