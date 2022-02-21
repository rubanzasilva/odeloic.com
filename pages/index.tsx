import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ode Loïc | Web & Mobile Software Engineer/Developer</title>
        <meta name="description" content="Experienced Web & Mobile Application Software Engineer/Developer" />
        <meta name="keywords" content="web,mobile,application,software,engineer,developer,frontend,fullstack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.subtitle}>
          Ode Loïc
        </h2>
        <h1 className={`${styles.title} ${styles.marginTop}`}>Web & Mobile Applications Software Engineer/Developer</h1>
        <h2 className={`${styles.subtitle} ${styles.marginTop}`}>
          With a passion in crafting solid and nice UIs.
        </h2>
        <p className={styles.marginTop}>Currently working on <a href="https://getsave.io" target="_blank" rel="noreferrer">a next generation saving groups mobile application</a> @ <a href="https://www.exuus.com/" target="_blank" rel="noreferrer">Exuus</a></p>
        <ul className={`${styles.contactList} ${styles.marginTopXl}`}>
          <li><a href="https://www.linkedin.com/in/odeloic/">LinkedIn</a></li>
          <li><a href="https://github.com/odeloic">Github</a></li>
          <li><a href="https://twitter.com/odeloic">Twitter</a></li>
          <li><a href="odeloic@gmail.com">Send me an email</a></li>
        </ul>
        <button className={styles.button}>
          <a href="https://www.dropbox.com/s/5yiy5aso6pi0hce/resume-ISHIMWE-MANZI-ODE-LOIC.pdf?dl=1">My full resume</a>
        </button>
      </main>

      <footer className={styles.footer}>
        <p>Designed and Built by Me &copy; 2022 in Stuttgart, Germany</p>
      </footer>
    </div>
  )
}

export default Home
