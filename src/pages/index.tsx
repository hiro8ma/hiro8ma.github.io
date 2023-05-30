import Image from 'next/image';
import Head from 'next/head';
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  NextPage,
  NextPageContext,
} from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';

type Props = {
  message: string;
};

const Home: NextPage<Props> = props => {
  const { message } = props;

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
    revalidate: 60,
  };
};

export default Home;
