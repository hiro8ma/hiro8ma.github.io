import Image from 'next/image';
import Head from 'next/head';
import { NextPage } from 'next';

type SSGProps = {};

const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      <Head>
        <title>hiro8ma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>hiro8ma</p>
      </main>
    </div>
  );
};

export default SSG;
