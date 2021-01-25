import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter 👨‍🚀 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1>
          <a href="https://nextjs.org" target="_blank">devter</a>
        </h1>
      </AppLayout>
    </>
  )
}
