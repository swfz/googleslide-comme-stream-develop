import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GoogleSlide Usertool Comment Stream Development</title>
      </Head>

      <ul>
        <li>
          <Link href="/usertool">Usertool</Link>
        </li>
        <li>
          <Link href="/slide">Slide</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
