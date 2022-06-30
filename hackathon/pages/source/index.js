import CardItem from '../../components/cardItem/CardItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Source = () => {
  const [sourceList, setSourceList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/sources')
      .then((response) => response.data)
      .then((data) => {
        setSourceList(data);
      });
  }, []);

  return (
    <div>
      {sourceList.map((source) => (
        <CardItem card={source} key={source.id} id={source.id} />
      ))}
    </div>
  );
};

export default Source;
