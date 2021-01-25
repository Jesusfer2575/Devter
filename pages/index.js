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
        <nav>
          <Link href='/timeline'>
            timeline
          </Link>
        </nav>
      </AppLayout>
      <style jsx>{`
        h1 {
          font-size: 48px;
        }
        nav {
          font-size: 24px;
        }
        div {
          text-align: center;
          color: #09f;
        }
        a {
          text-decoration: none;
          color: #09f;
        }
      `}</style>
      <style jsx global>{`
        
      `}</style>
    </>
  )
}
