import Head from 'next/head'

import Header from '../../components/header';
import styles from './projects.module.css';
export default function Projects() {
  return (
    <div>
      <Head>
        <title>Henric \ Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.introText}>
            <div className={styles.introTitle}>
                PROJECTS
            </div>
            <div className={styles.introSubtitle}>
                Scroll down to see a selected set of projects I have worked on.
                </div>

        </div>

        
      </div>
    </div>
  )
}
