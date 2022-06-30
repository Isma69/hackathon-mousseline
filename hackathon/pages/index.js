import Layout from "../components/Layout/Layout";
import CircleChoice from "../components/CircleChoice";
import style from "../styles/Home.module.css";
import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import CardItem from "../components/cardItem/CardItem";
import FormActuality from "../components/form/FormActuality";
import FormShare from "../components/form/FormShare";
import FormLearning from "../components/form/FormLearning";
import FormSource from "../components/form/FormSource";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  const {
    actualityList,
    learningList,
    shareList,
    sourceList,
    showActuality,
    showLearning,
    showShare,
    showSource,
  } = useContext(CardsContext);

  console.log(actualityList);

  const ShowForm = () => {};

  return (
    <Layout>
      <div className={style.mainWrapper}>
        <div className={style.test}>
          <div className={style.mainContainer}>
            <CircleChoice />
          </div>
          <div className={`${showActuality ? "" : style.showContent}`}>
            <Link href="#formActuality">
              <BsFillArrowDownCircleFill className={style.btnScroll} />
            </Link>
            {actualityList.map((actuality) => (
              <CardItem card={actuality} key={actuality.id} id={actuality.id} />
            ))}
            <FormActuality />
          </div>
          <div className={`${showLearning ? "" : style.showContent}`}>
            <Link href="#formLearning">
              <BsFillArrowDownCircleFill className={style.btnScroll} />
            </Link>
            {learningList.map((learning) => (
              <CardItem card={learning} key={learning.id} id={learning.id} />
            ))}
            <FormLearning />
          </div>
          <div className={`${showShare ? "" : style.showContent}`}>
            <Link href="#formShare">
              <BsFillArrowDownCircleFill className={style.btnScroll} />
            </Link>
            {shareList.map((share) => (
              <CardItem card={share} key={share.id} id={share.id} />
            ))}
            <FormShare />
          </div>
          <div className={`${showSource ? "" : style.showContent}`}>
            <Link href="#formSource">
              <BsFillArrowDownCircleFill className={style.btnScroll} />
            </Link>
            {sourceList.map((source) => (
              <CardItem card={source} key={source.id} id={source.id} />
            ))}
            <FormSource />
          </div>
        </div>
      </div>
    </Layout>
  );
}
