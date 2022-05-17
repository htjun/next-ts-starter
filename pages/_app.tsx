import type { AppProps } from 'next/app'
import 'destyle.css'
import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
  body: {
    fontFamily: `"IBM Plex Sans", sans-serif`,
  },
  '@font-face': [
    {
      fontFamily: 'Inter',
      fontDisplay: 'swap',
      src: 'url("/fonts/inter-var-latin.woff2") format("woff2-variations")',
      fontWeight: '1 999',
    },
    {
      fontFamily: 'IBM Plex Sans',
      fontDisplay: 'swap',
      src: 'url("/fonts/ibm-plex-sans-var-roman.woff2") format("woff2-variations")',
      fontWeight: '1 999',
    },
  ],
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
