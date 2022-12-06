import Head from 'next/head'
import Login from '../views/Login/Login'
import { AuthCycle } from './AuthCycle'

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <meta charSet="utf-8" />
        {/* <a rel="icon" href="/favicon.png" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Living at Millgrove transcends ordinary notions of luxury. It is a
              natural haven that gives you a complete sense of belonging. A place
              where you can nurture relationships and make time for what matters
              most."
        />
        <title>Millgrove</title>
      </Head>

      <main className="main">
        <AuthCycle />
      </main>
    </div>
  )
}
