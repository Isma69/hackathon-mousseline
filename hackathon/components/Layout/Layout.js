import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Atempo for practitioners" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
