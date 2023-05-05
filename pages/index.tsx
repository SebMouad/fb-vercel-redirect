import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top Recettes</title>
        <meta name="description" content="Des recettes faciles pour des repas sains et savoureux ! Suivez-nous pour plus d'idées." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue à Top Recettes
        </h1>
      </main>

    </div>
  )
}

export default Home
