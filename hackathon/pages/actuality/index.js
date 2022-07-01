import style from "../../styles/ComponentsStyle.module.css";
import FormBis from "../../components/form/FormBis";
import CardItem from "../../components/cardItem/CardItem";
import { useState, useEffect } from "react";
import axios from "axios";

const Actuality = () => {
  const [actualityList, setActualityList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/actualities")
      .then((response) => response.data)
      .then((data) => {
        setActualityList(data);
      });
  }, []);
  console.log(actualityList);

  return (
    <div>
      <FormBis />
      {actualityList.map((actuality) => (
        <CardItem card={actuality} key={actuality.id} id={actuality.id} />
      ))}
    </div>
  );
};

export default Actuality;
