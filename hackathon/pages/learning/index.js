import CardItem from '../../components/cardItem/CardItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Learning = () => {
  const [learningList, setLearningList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/learnings')
      .then((response) => response.data)
      .then((data) => {
        setLearningList(data);
      });
  }, []);

  return (
    <div>
      {learningList.map((learning) => (
        <CardItem card={learning} key={learning.id} id={learning.id} />
      ))}
    </div>
  );
};

export default Learning;
