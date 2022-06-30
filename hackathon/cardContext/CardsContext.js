import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [actualityList, setActualityList] = useState([]);
  const [learningList, setLearningList] = useState([]);
  const [shareList, setShareList] = useState([]);
  const [sourceList, setSourceList] = useState([]);
  const [showActuality, setShowActuality] = useState(false);
  const [showLearning, setShowLearning] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showSource, setShowSource] = useState(false);

  //ACTUALITY
  useEffect(() => {
    axios
      .get('/api/actualities')
      .then((response) => response.data)
      .then((data) => {
        setActualityList(data);
      });
  }, []);

  //LEARNING
  useEffect(() => {
    axios
      .get('/api/learnings')
      .then((response) => response.data)
      .then((data) => {
        setLearningList(data);
      });
  }, []);

  //SHARE
  useEffect(() => {
    axios
      .get('/api/shares')
      .then((response) => response.data)
      .then((data) => {
        setShareList(data);
      });
  }, []);

  //SOURCE
  useEffect(() => {
    axios
      .get('/api/sources')
      .then((response) => response.data)
      .then((data) => {
        setSourceList(data);
      });
  }, []);

  return (
    <CardsContext.Provider
      value={{
        actualityList,
        setActualityList,
        learningList,
        setLearningList,
        shareList,
        setShareList,
        sourceList,
        setSourceList,
        showActuality,
        setShowActuality,
        showLearning,
        setShowLearning,
        showShare,
        setShowShare,
        showSource,
        setShowSource,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
