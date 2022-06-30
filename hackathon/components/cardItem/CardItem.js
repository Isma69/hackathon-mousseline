/* eslint-disable @next/next/no-img-element */
import style from '../../styles/ComponentsStyle.module.css';

const CardItem = ({ card }) => {
  return (
    <>
      <div className={style.mainWrapper}>
        <div className={style.mainContainer}>
          <div className={style.topContainerInfo}>
            <div className={style.imageContainer}>
              <img
                className={style.imageStyle}
                src={card.urlPicture}
                alt={card.title}
                height="100%"
                width="100%"
              />
            </div>
            <div className={style.infoStyle}>
              <h1>{card.title}</h1>
              <p>{card.premise}</p>
              <p>{card.createdAt}</p>
            </div>
          </div>

          <p className={style.textStyle}>{card.content}</p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
