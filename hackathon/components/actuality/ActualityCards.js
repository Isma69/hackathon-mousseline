/* eslint-disable @next/next/no-img-element */
import style from '../../styles/ComponentsStyle.module.css';

export default function ActualityCards({ actuality }) {
  return (
    <>
      <div className={style.mainWrapper}>
        <div className={style.mainContainer}>
          <div className={style.topContainerInfo}>
            <div className={style.imageContainer}>
              <img
                className={style.imageStyle}
                src={actuality.urlPicture}
                alt={actuality.title}
                height="100%"
                width="100%"
              />
            </div>
            <div className={style.infoStyle}>
              <h1>{actuality.title}</h1>
              <p>{actuality.premise}</p>
              <p>{actuality.createdAt}</p>
            </div>
          </div>

          <p className={style.textStyle}>{actuality.content}</p>
        </div>
      </div>
    </>
  );
}
