import styleCircleChoice from '../styles/CircleChoice.module.css';
import { useRouter } from 'next/router';

export default function CircleChoice() {
  return (
    <div className={styleCircleChoice.mainContainer}>
      <div className={styleCircleChoice.squareContainer}>
        <div className={styleCircleChoice.squareLeftTop} />
        <div className={styleCircleChoice.squareRightTop} />
        <div className={styleCircleChoice.squareRightBottom} />
        <div className={styleCircleChoice.squareLeftBottom} />
        <div className={styleCircleChoice.textActuality}> ACTUALITÉ </div>
        <div className={styleCircleChoice.textLearning}> APPRENTISSAGE </div>
        <div className={styleCircleChoice.textShare}> PARTAGE </div>
        <div className={styleCircleChoice.textSource}> SOURCE </div>
      </div>
    </div>
  );
}
