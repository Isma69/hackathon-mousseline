import styleCircleChoice from '../styles/CircleChoice.module.css';
import { useContext } from 'react';
import { CardsContext } from '../cardContext/CardsContext';

export default function CircleChoice() {
  const {
    setShowActuality,
    setShowLearning,
    setShowShare,
    setShowSource,
    showActuality,
    showLearning,
    showShare,
    showSource,
  } = useContext(CardsContext);

  const handleShowActuality = () => {
    if (showLearning) {
      !setShowLearning(!showLearning);
    }
    if (showShare) {
      setShowShare(!showShare);
    }
    if (showSource) {
      setShowSource(!showSource);
    }
    setShowActuality(!showActuality);
  };

  const handleShowLearning = () => {
    if (showActuality) {
      setShowActuality(!showActuality);
    }
    if (showShare) {
      setShowShare(!showShare);
    }
    if (showSource) {
      setShowSource(!showSource);
    }
    setShowLearning(!showLearning);
  };

  const handleShowShare = () => {
    if (showActuality) {
      setShowActuality(!showActuality);
    }
    if (showLearning) {
      !setShowLearning(!showLearning);
    }
    if (showSource) {
      setShowSource(!showSource);
    }
    setShowShare(!showShare);
  };

  const handleShowSource = () => {
    if (showActuality) {
      setShowActuality(!showActuality);
    }
    if (showLearning) {
      !setShowLearning(!showLearning);
    }
    if (showShare) {
      setShowShare(!showShare);
    }
    setShowSource(!showSource);
  };
  return (
    <div className={styleCircleChoice.mainContainer}>
      <div>
        <div className={styleCircleChoice.squareContainer}>
          <div
            className={styleCircleChoice.squareLeftTop}
            onClick={() => handleShowActuality()}
          />
          <div
            className={styleCircleChoice.squareRightTop}
            onClick={() => handleShowLearning()}
          />
          <div
            className={styleCircleChoice.squareRightBottom}
            onClick={() => handleShowSource()}
          />
          <div
            className={styleCircleChoice.squareLeftBottom}
            onClick={() => handleShowShare()}
          />
          <div className={styleCircleChoice.textActuality}>ACTUALITÉ</div>
          <div className={styleCircleChoice.textLearning}>APPRENTISSAGE</div>
          <div className={styleCircleChoice.textShare}>PARTAGE</div>
          <div className={styleCircleChoice.textSource}>SOURCE</div>
        </div>
      </div>
    </div>
  );
}
