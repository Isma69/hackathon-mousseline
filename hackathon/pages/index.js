import Layout from '../components/Layout/Layout';
import CircleChoice from '../components/CircleChoice';
import style from '../styles/Home.module.css';
import { useContext } from 'react';
import { CardsContext } from '../cardContext/CardsContext';
import CardItem from '../components/cardItem/CardItem';

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

  return (
    <Layout>
      <div className={style.mainWrapper}>
        <div className={style.test}>
          <div className={style.mainContainer}>
            <CircleChoice />
          </div>

          <div className={`${showActuality ? '' : style.showContent}`}>
            {actualityList.map((actuality) => (
              <CardItem card={actuality} key={actuality.id} id={actuality.id} />
            ))}
          </div>
          <div className={`${showLearning ? '' : style.showContent}`}>
            {learningList.map((learning) => (
              <CardItem card={learning} key={learning.id} id={learning.id} />
            ))}
          </div>
          <div className={`${showShare ? '' : style.showContent}`}>
            {shareList.map((share) => (
              <CardItem card={share} key={share.id} id={share.id} />
            ))}
          </div>
          <div className={`${showSource ? '' : style.showContent}`}>
            {sourceList.map((source) => (
              <CardItem card={source} key={source.id} id={source.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
