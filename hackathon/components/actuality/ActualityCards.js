/* eslint-disable @next/next/no-img-element */
import style from '../../styles/ComponentsStyle.module.css';

export default function ActualityCards() {
  // const [actuality, setActuality] = useState({});

  // // useEffet(() => {
  // //   id &&
  // //     axios
  // //       .get(`/api/actuality/${id}`)
  // //       .then((res) => setActuality(res.data))
  // //       .catch((err) => {
  // //         console.error(err.response.data);
  // //       });
  // // }, [id, setActuality]);

  return (
    <>
      <div className={style.mainWrapper}>
        <div className={style.mainContainer}>
          <div className={style.topContainerInfo}>
            <div className={style.imageContainer}>
              <img
                className={style.imageStyle}
                src="/images/téléchargement.jpeg"
                alt="erger"
              />
            </div>
            <div className={style.infoStyle}>
              <h1>Title</h1>
              <p>agence de ...</p>
              <p>date</p>
            </div>
          </div>

          <p className={style.textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
            dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
            a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
            molestie, enim est eleifend mi, non fermentum diam nisl sit amet
            erat. Duis semper.
          </p>
        </div>
      </div>
    </>
  );
}
