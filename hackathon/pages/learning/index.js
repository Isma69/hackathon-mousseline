import ActualityCards from '../../components/actuality/ActualityCards';
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
        <ActualityCards
          actuality={learning}
          key={learning.id}
          id={learning.id}
        />
      ))}
    </div>
  );
};

export default Learning;
