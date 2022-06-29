import Layout from "../components/Layout/Layout";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home page">
      <div>
        <h2 className={style.title}>
          A culture of sharing and shared learning
        </h2>
      </div>
    </Layout>
  );
}
