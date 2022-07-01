/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";
import style from "./FormBis.module.css";

const FormShare = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [photo, setPhoto] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");

  const [userTitle, setUserTitle] = useState("");
  const [userAuthor, setUserAuthor] = useState("");
  const [userLocalisation, setUserLocalisation] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [userContent, setUserContent] = useState("");
  const [userType, setUserType] = useState("");

  const HandleSubmitShare = (e) => {
    e.preventDefault();
    setTitle(!title);
    setAuthor(!author);
    setLocalisation(!localisation);
    setPhoto(!photo);
    setContent(!content);
    setType(!type);

    axios
      .post("/api/shares", {
        title: userTitle,
        author: userAuthor,
        premise: userLocalisation,
        content: userContent,
        urlPicture: userPhoto,
        type: userType,
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        setUserTitle("");
        setUserAuthor("");
        setUserLocalisation("");
        setUserContent("");
        setUserPhoto("");
        setUserType("");
      });
  };

  return (
    <section id="formShare">
      <div className={style.container}>
        <div className={style.contactBox}>
          <div className={style.left}>
            <img
              src="/images/share.png"
              alt="design"
              width="480vw"
              height="508vh"
            />
          </div>
          <div className={style.right}>
            <h2 className={style.title}>Share</h2>
            <input
              type="text"
              className={style.field}
              placeholder="Title"
              value={userTitle}
              onChange={(e) => setUserTitle(e.target.value)}
            />
            <input
              type="text"
              className={style.field}
              placeholder="Author"
              value={userAuthor}
              onChange={(e) => setUserAuthor(e.target.value)}
            />
            <input
              type="text"
              className={style.field}
              placeholder="Localisation"
              value={userLocalisation}
              onChange={(e) => setUserLocalisation(e.target.value)}
            />
            <input
              type="text"
              className={style.field}
              placeholder="type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            />
            <input
              type="text"
              className={style.field}
              placeholder="Photo URL"
              value={userPhoto}
              onChange={(e) => setUserPhoto(e.target.value)}
            />

            <textarea
              id={style.textarea}
              placeholder="Content"
              className={style.field}
              value={userContent}
              onChange={(e) => setUserContent(e.target.value)}
            ></textarea>
            <button className={style.btn} onClick={HandleSubmitShare}>
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormShare;
