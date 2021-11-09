import { ThemeProvider } from 'next-themes'
import '@/styles/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
