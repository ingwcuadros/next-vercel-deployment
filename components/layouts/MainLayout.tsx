import styles from "./MainLayout.module.css";
import Head from "next/head";
import { Navbar } from '../Navbar'
import { FC } from "react";


interface Props {
  children?: React.ReactNode | undefined,
}

export const MainLayout:FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Contact</title>
            <meta name="description" content="Contact Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
    
          <main className={styles.main}>
            { children }
          </main>
        </div>
      )
}
