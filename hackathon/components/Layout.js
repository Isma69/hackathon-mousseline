import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Réseau social entre développeurs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
