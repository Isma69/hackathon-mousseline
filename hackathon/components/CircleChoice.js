import styleCircleChoice from '../styles/CircleChoice.module.css';
import { useRouter } from 'next/router';

export default function CircleChoice() {
  const router = useRouter();
  return (
    <div className={styleCircleChoice.mainContainer}>
      <div className={styleCircleChoice.squareContainer}>
        <div
          className={styleCircleChoice.squareLeftTop}
          onClick={() => router.push('/actuality')}
        />
        <div
          className={styleCircleChoice.squareRightTop}
          onClick={() => router.push('/learning')}
        />
        <div
          className={styleCircleChoice.squareRightBottom}
          onClick={() => router.push('/source')}
        />
        <div
          className={styleCircleChoice.squareLeftBottom}
          onClick={() => router.push('/share')}
        />
        <div className={styleCircleChoice.textActuality}>ACTUALITÉ</div>
        <div className={styleCircleChoice.textLearning}>APPRENTISSAGE</div>
        <div className={styleCircleChoice.textShare}>PARTAGE</div>
        <div className={styleCircleChoice.textSource}>SOURCE</div>
      </div>
    </div>
  );
}
