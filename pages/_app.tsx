import type { AppProps } from 'next/app'
import { NextUIProvider, Container } from '@nextui-org/react'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <NextUIProvider>
      <main>
        <Container sm>
          <Component {...pageProps} />
        </Container>
      </main>
    </NextUIProvider>
    <style jsx global>{`
      body {
        min-height: 100vh;
        padding-bottom: 2rem;
      }
    `}</style>
  </>
)

export default App
