import Layout from '../components/Layout/Layout';
import CircleChoice from '../components/CircleChoice';
import style from '../styles/Home.module.css';
import { useContext, useState } from 'react';
import { CardsContext } from '../context/CardsContext';
import CardItem from '../components/cardItem/CardItem';
import { FcSearch } from 'react-icons/fc';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
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
          <div>
            <input
              value={searchValue}
              type="text"
              placeholder="Mise à jour, JavaScript, Python..."
              onChange={(event) => setSearchValue(event.target.value)}
              className={style.searchBar}
            />
            <FcSearch
              size={40}
              style={{ verticalAlign: 'middle', marginLeft: '10px' }}
            />
          </div>

          <div className={`${showActuality ? '' : style.showContent}`}>
            {actualityList
              .filter((actuality) =>
                actuality.title
                  .toUpperCase()
                  .includes(searchValue.toUpperCase())
              )
              .map((actuality) => (
                <CardItem
                  card={actuality}
                  key={actuality.id}
                  id={actuality.id}
                />
              ))}
          </div>
          <div className={`${showLearning ? '' : style.showContent}`}>
            {learningList
              .filter((learning) =>
                learning.title.toUpperCase().includes(searchValue.toUpperCase())
              )
              .map((learning) => (
                <CardItem card={learning} key={learning.id} id={learning.id} />
              ))}
          </div>
          <div className={`${showShare ? '' : style.showContent}`}>
            {shareList
              .filter((share) =>
                share.title.toUpperCase().includes(searchValue.toUpperCase())
              )
              .map((share) => (
                <CardItem card={share} key={share.id} id={share.id} />
              ))}
          </div>
          <div className={`${showSource ? '' : style.showContent}`}>
            {sourceList
              .filter((source) =>
                source.title.toUpperCase().includes(searchValue.toUpperCase())
              )
              .map((source) => (
                <CardItem card={source} key={source.id} id={source.id} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
