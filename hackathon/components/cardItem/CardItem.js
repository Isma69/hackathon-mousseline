/* eslint-disable @next/next/no-img-element */
import style from '../../styles/ComponentsStyle.module.css';

export default function CardItem({ card }) {
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
              <p>{card.premise}</p>
              <p>{card.createdAt}</p>
              <h1>{card.title}</h1>
            </div>
          </div>

          <p className={style.textStyle}>{card.content}</p>
        </div>
      </div>
    </>
  );
}
