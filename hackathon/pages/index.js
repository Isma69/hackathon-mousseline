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
import { FcSearch } from 'react-icons/fc';
import image1 from '../public/image/CHAT-icon-01.png'
import Image from "next/image";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
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
      <Link href="/auth" className= "chatIcon">
          <a className={style.chatIcon}>
            <Image
              src={image1}
              width={150}
              height={150}
              className="chatIcon"
              alt="chatIcon"
            />
          </a>
        </Link>
        <div className={style.test}>
          <div className={style.mainContainer}>
            <CircleChoice />
          </div>
          <div className={`${showActuality ? '' : style.showContent}`}>
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
            <Link href="#formActuality">
              <BsFillArrowDownCircleFill className={style.btnScroll} />
            </Link>
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
            <Link href="#formLearning">
              <BsFillArrowDownCircleFill className={style.btnScroll} />
            </Link>
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
            <Link href="#formShare">
              <BsFillArrowDownCircleFill className={style.btnScroll} />
            </Link>
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
            <Link href="#formSource">
              <BsFillArrowDownCircleFill className={style.btnScroll} />
            </Link>
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