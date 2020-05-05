import React from "react";

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <div className="picture">
        <img src={props.image} alt="not working"/>
      </div>
      <div className="infos">
        <ul>
          <li>First name: {props.firstName}</li>
          <li>Last name: {props.gender}</li>
          <li>Gender: {props.gender}</li>
          <li>Height: {props.height}</li>
          <li>Birth: {props.birth}</li>
        </ul>
      </div>
    </div>
  );
};

export default IdCard;
