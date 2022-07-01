import Layout from '../components/Layout/Layout';
import CircleChoice from '../components/CircleChoice';
import style from '../styles/Home.module.css';
import { CardsContext } from '../cardContext/CardsContext';
import CardItem from '../components/cardItem/CardItem';
import FormActuality from '../components/form/FormActuality';
import FormShare from '../components/form/FormShare';
import FormLearning from '../components/form/FormLearning';
import FormSource from '../components/form/FormSource';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { useContext, useState } from 'react';

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
            <p>
              Le partage d'informations pour un suivi projet plus clair. Le
              partage d'informations pour une collaboration plus fluide entre
              les différents services. Le partage d'informations pour renforcer
              l'esprit d'équipe. Le partage d'informations pour un gain de temps
              et de productivité. Démocratiser le partage de connaissances
            </p>
            <CircleChoice />
          </div>
          <div className={`${showActuality ? '' : style.showContent}`}>
            <div className={style.searchContainer}>
              <input
                value={searchValue}
                type="text"
                placeholder="Mise à jour, JavaScript, Python..."
                onChange={(event) => setSearchValue(event.target.value)}
                className={style.searchBar}
              />
              <Link href="#formActuality">
                <BsFillArrowDownCircleFill className={style.btnScroll} />
              </Link>
            </div>
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
            <FormActuality />
          </div>
          <div className={`${showLearning ? '' : style.showContent}`}>
            <div className={style.searchContainer}>
              <input
                value={searchValue}
                type="text"
                placeholder="Mise à jour, JavaScript, Python..."
                onChange={(event) => setSearchValue(event.target.value)}
                className={style.searchBar}
              />
              <Link href="#formLearning">
                <BsFillArrowDownCircleFill className={style.btnScroll} />
              </Link>
            </div>
            {learningList
              .filter((learning) =>
                learning.title.toUpperCase().includes(searchValue.toUpperCase())
              )
              .map((learning) => (
                <CardItem card={learning} key={learning.id} id={learning.id} />
              ))}
            <FormLearning />
          </div>
          <div className={`${showShare ? '' : style.showContent}`}>
            <div className={style.searchContainer}>
              <input
                value={searchValue}
                type="text"
                placeholder="Mise à jour, JavaScript, Python..."
                onChange={(event) => setSearchValue(event.target.value)}
                className={style.searchBar}
              />
              <Link href="#formShare">
                <BsFillArrowDownCircleFill className={style.btnScroll} />
              </Link>
            </div>
            {shareList
              .filter(
                (share) =>
                  share.title
                    .toUpperCase()
                    .includes(searchValue.toUpperCase()) ||
                  share.type.toUpperCase().includes(searchValue.toUpperCase())
              )
              .map((share) => (
                <CardItem card={share} key={share.id} id={share.id} />
              ))}
            <FormShare />
          </div>
          <div className={`${showSource ? '' : style.showContent}`}>
            <div className={style.searchContainer}>
              <input
                value={searchValue}
                type="text"
                placeholder="Mise à jour, JavaScript, Python..."
                onChange={(event) => setSearchValue(event.target.value)}
                className={style.searchBar}
              />
              <Link href="#formSource">
                <BsFillArrowDownCircleFill className={style.btnScroll} />
              </Link>
            </div>
            {sourceList
              .filter(
                (source) =>
                  source.title
                    .toUpperCase()
                    .includes(searchValue.toUpperCase()) ||
                  source.type.toUpperCase().includes(searchValue.toUpperCase())
              )
              .map((source) => (
                <CardItem card={source} key={source.id} id={source.id} />
              ))}
            <FormSource />
          </div>
        </div>
      </div>
    </Layout>
  );
}
