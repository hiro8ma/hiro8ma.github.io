import Image from 'next/image';
import Head from 'next/head';
import {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
  NextPageContext,
} from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

type Props = {
  message: string;
};

const SSG: NextPage<Props> = props => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>hiro8ma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>hiro8ma</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSG;
