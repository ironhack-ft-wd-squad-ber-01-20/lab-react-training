import React from "react";

const idCard = props => {
  let date = props.birth.toDateString();
  return (
    <div className="idCard">
      <div className="img-box">
        <img src={props.picture} />
      </div>
      <div className="data-box">
        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height / 100}m</p>
        <p>Birth: {date}</p>
      </div>
    </div>
  );
};

export default idCard;
