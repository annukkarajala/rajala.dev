import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
