import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav_bar from '@components/Nav_bar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Oke_Cuba</title>
        <link rel="icon" href="/favicon.ico" />
        <Nav_bar></Nav_bar>
      </Head>

      <main>      
        <Header title="This will be the Oke_Cuba oficial website. " />
              

        <p className="description">
          Get started by editing <code>pages/index.js </code>
        </p>
        <div className='Text'>

        </div>
      </main>
      

      <Footer />
    </div>
  )
}
