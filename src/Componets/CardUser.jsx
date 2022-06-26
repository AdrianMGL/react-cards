import "../Styles/CardUser.css";
import dataUsers from "../Data/users.json";
import { useState } from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import CardBtn from "./CardBtn";

const colors = [
  "#ebe11f",
  "#7b68ee",
  "#ea8456",
  "#157fea",
  "#ae95ee",
  "#66cdaa",
  "#e8618e",
  "#54c6c2",
  "#949494",
];

const CardUser = () => {
  /** json users */
  const userRandom = Math.random() * dataUsers.length;
  const random = Math.floor(userRandom);
  const [index, setIndex] = useState(random);

  /** evento click */
  const clickBtn = () => {
    const clickRandom = Math.random() * dataUsers.length;
    const random = Math.floor(clickRandom);
    setIndex(random);
  };

  /** Get colors */
  const colorRandom = Math.floor(Math.random() * colors.length);
  const color = colors[colorRandom];

  window.document.body.style = `background:${color}`;

  /** Props */
  const userName = `${dataUsers[index].name.title} ${dataUsers[index].name.first}
  ${dataUsers[index].name.last}`;
  const directionCity = `${dataUsers[index].location.city}`;
  const directionState = `${dataUsers[index].location.state}`;
  const country = `${dataUsers[index].location.country}`;
  const postCode = `${dataUsers[index].location.postcode}`;
  const email = `${dataUsers[index].email}`;
  const phone = `${dataUsers[index].phone}`;

  return (
    <div className="card__container">
      <div className="card" style={{ color: color }}>
        <img src={dataUsers[index].picture.large} alt="user" />
        <div className="card__date">
          <CardTitle userName={userName} />
          <CardContent
            directionCity={directionCity}
            directionState={directionState}
            country={country}
            postCode={postCode}
            email={email}
            phone={phone}
          />
          <CardBtn btnOnClick={clickBtn} color={color} />
        </div>
        <div className="ima">
          <i className="bx bx-message-dots bx-tada "></i>
        </div>
      </div>
    </div>
  );
};
export default CardUser;
