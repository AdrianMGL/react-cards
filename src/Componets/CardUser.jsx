import "../Styles/CardUser.css";
import dataUsers from "../Data/users.json";
import { useState } from "react";

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

  return (
    <div className="card__container">
      <div className="card" style={{ color: color }}>
        <img src={dataUsers[index].picture.large} alt="user" />
        <div className="card__date">
          <h2 className="name">
            <i className="bx bxs-user"></i>
            {dataUsers[index].name.title} {dataUsers[index].name.first}{" "}
            {dataUsers[index].name.last}
          </h2>
          <div className="card__info-user">
            <h3 className="direction">
              <i className="bx bx-map-pin"></i>
              {dataUsers[index].location.city},{" "}
              <span>{dataUsers[index].location.state}.</span>
            </h3>
            <h3 className="city">
              <i className="bx bxs-map"></i>
              {dataUsers[index].location.country}.
            </h3>
            <h3 className="postcode">
              <i className="bx bx-id-card"></i>
              {dataUsers[index].location.postcode}.
            </h3>
            <h3 className="email">
              <i className="bx bx-envelope"></i>
              {dataUsers[index].email}.
            </h3>
            <h3 className="phone">
              <i className="bx bx-phone"></i>
              {dataUsers[index].phone}.
            </h3>
          </div>
          <button className="btn" onClick={clickBtn} style={{ color: color }}>
            <i className="bx bx-rotate-right bx-spin bx-flip-vertical"></i>
          </button>
        </div>
        <div className="ima">
          <i className="bx bx-message-dots bx-tada "></i>
        </div>
      </div>
    </div>
  );
};
export default CardUser;
