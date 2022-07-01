/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useState } from 'react';
import style from './FormBis.module.css';

const FormLearning = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [photo, setPhoto] = useState('');
  const [content, setContent] = useState('');

  const [userTitle, setUserTitle] = useState('');
  const [userAuthor, setUserAuthor] = useState('');
  const [userLocalisation, setUserLocalisation] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [userContent, setUserContent] = useState('');

  const HandleSubmitLearning = (e) => {
    e.preventDefault();
    setTitle(!title);
    setAuthor(!author);
    setLocalisation(!localisation);
    setPhoto(!photo);
    setContent(!content);

    axios
      .post('/api/learnings', {
        title: userTitle,
        author: userAuthor,
        premise: userLocalisation,
        content: userContent,
        urlPicture: userPhoto,
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        setUserTitle('');
        setUserAuthor('');
        setUserLocalisation('');
        setUserContent('');
        setUserPhoto('');
      });
  };

  return (
    <section id="formLearning">
      <div className={style.container}>
        <div className={style.contactBox}>
          <div className={style.left}>
            <img
              src="/images/share.png"
              alt="design"
              width="500vw"
              height="593vh"
            />
          </div>
          <div className={style.right}>
            <h2 className={style.title}>Share New Learning Post</h2>
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
            <button className={style.btn} onClick={HandleSubmitLearning}>
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormLearning;
