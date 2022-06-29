<<<<<<< HEAD
import Layout from "../component/Layout/Layout";
import Learning from "../component/Learning/Learning";
import style from "../styles/Home.module.css";
=======
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../component/Layout/Layout';
import styles from '../styles/Home.module.css';
>>>>>>> dev

export default function Home() {
  return (
    <Layout pageTitle="Home page">
      <div>
        <h2 className={style.title}>
          A culture of sharing and shared learning
        </h2>
      </div>
      <Learning />
    </Layout>
  );
}
