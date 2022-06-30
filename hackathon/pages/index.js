import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import CircleChoice from '../components/CircleChoice';
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>La Chatte</div>
      <CircleChoice />
    </Layout>
  );
}
