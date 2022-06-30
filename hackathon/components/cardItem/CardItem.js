/* eslint-disable @next/next/no-img-element */
import style from '../../styles/ComponentsStyle.module.css';
import * as dayjs from 'dayjs';

const CardItem = ({ card }) => {
  const date = card.createdAt;
  const newFormatdate = dayjs(date).format('MMMM D, YYYY h:mm A');
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
              <p>{newFormatdate}</p>
              <h1>{card.title}</h1>
            </div>
          </div>

          <p className={style.textStyle}>{card.content}</p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
