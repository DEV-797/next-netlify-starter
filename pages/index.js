import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Oke_Cuba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This will be the Oke_Cuba oficial website. " />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
