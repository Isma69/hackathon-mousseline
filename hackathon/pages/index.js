import Layout from '../components/Layout/Layout';
import CircleChoice from '../components/CircleChoice';
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={style.mainWrapper}>
        <div className={style.mainContainer}>
          <CircleChoice />
        </div>
      </div>
    </Layout>
  );
}
