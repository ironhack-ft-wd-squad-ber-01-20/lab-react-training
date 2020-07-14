import React from "react";

const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt=""/>
      <p>Name: {props.firstName + " " + props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height / 100}m</p>
      <p>Birth: {props.birth.toLocaleDateString("en-GB")}</p>
    </div>
  );
};

export default IdCard;
