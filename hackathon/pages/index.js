import Head from 'next/head';
import Image from 'next/image';
import CircleChoice from '../component/CircleChoice';
import Layout from '../component/Layout/Layout';
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>La Chatte</div>
      <CircleChoice />
    </Layout>
  );
}
