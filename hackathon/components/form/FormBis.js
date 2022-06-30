/* eslint-disable @next/next/no-img-element */
import style from "./FormBis.module.css";

const FormBis = ({ title }) => {
  return (
    <div className={style.container}>
      <div className={style.contactBox}>
        <div className={style.left}>
          <img
            src="/images/news.jpg"
            alt="design"
            width="500vw"
            height="508vh"
          />
        </div>
        <div className={style.right}>
          <h2 className={style.title}>{title}</h2>
          <input type="text" className={style.field} placeholder="Title" />
          <input type="text" className={style.field} placeholder="Author" />
          <input
            type="text"
            className={style.field}
            placeholder="Localisation"
          />
          <input type="text" className={style.field} placeholder="Photo URL" />
          <textarea
            id={style.textarea}
            placeholder="Content"
            className={style.field}
          ></textarea>
          <button className={style.btn}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default FormBis;
