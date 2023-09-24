import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const siteTitle = 'Rajala.dev'

interface LayoutProps {
   children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="content-grid">{children}</div>
      <Footer />
    </>
  )
}
