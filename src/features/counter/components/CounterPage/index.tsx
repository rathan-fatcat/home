import Head from 'next/head';
import Link from 'next/link';

import Counter from '../Counter';
import styles from './index.module.scss';

const CounterPage = () => {
  return (
    <div className={`theme-container ${styles.root}`}>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <img src="/nextjs.png" className={styles.logo} alt="logo" />
        <h2 className={'font-Telkom123-Regular ' + styles.heading}>
          The React Framework for Production
        </h2>
        <h3 className={styles.subtext}>
          Next.js has all the tools you need to make the Web. Faster.
        </h3>
        <h3 className={styles.subtext}>
          <span>
            <span>Learn </span>
            <a
              className={styles.link}
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React,
            </a>
            <a
              className={styles.link}
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux,
            </a>
            <a
              className={styles.link}
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </h3>
        <Link href={'https://nextjs.org/#features'}>Why use Next.js →</Link>

        <Counter />
      </div>
    </div>
  );
};

export default CounterPage;
