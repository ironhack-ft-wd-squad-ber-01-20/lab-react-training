import React from "react";

const IdCard = props => {
  console.log(props);
  return (
    <div>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
      <img src={props.picture} alt={props.firstName} />
    </div>
  );
};

export default IdCard;
