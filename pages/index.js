import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Sun } from 'react-feather';
import Spacer from '../src/components/Spacer/Spacer'
import Slider from '../src/components/Slider/Slider'
import React from 'react';
import App from '../src/components/App/App'


export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Unguided Project . NaveenSingh </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <h6 className={styles.title}>Gradient Generator</h6>
          <App />
        </main>
      <style jsx global>{`
        html,
        body {
          --bg: #101018;
          --color: #DBDEDF;
          padding: 0;
          margin: 0;
          background: var(--bg);
          color: var(--color);
          font-family: "Comfortaa", sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> 
    </div>
  );
}
