import ActualityCards from '../../components/actuality/ActualityCards';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Share = () => {
  const [shareList, setShareList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/shares')
      .then((response) => response.data)
      .then((data) => {
        setShareList(data);
      });
  }, []);

  return (
    <div>
      {shareList.map((share) => (
        <ActualityCards actuality={share} key={share.id} id={share.id} />
      ))}
    </div>
  );
};

export default Share;
