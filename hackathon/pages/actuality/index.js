import ActualityCards from '../../components/actuality/ActualityCards';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Actuality = () => {
  const [actualityList, setActualityList] = useState('');

  useEffect(() => {
    axios
      .get('/api/actualities')
      .then((response) => response.data)
      .then((data) => {
        setActualityList(data);
      });
  }, []);
  console.log(actualityList);

  return (
    <div>
      {actualityList.map((actuality) => (
        <ActualityCards
          actuality={actuality}
          key={actuality.id}
          id={actuality.id}
        />
      ))}
    </div>
  );
};

export default Actuality;
