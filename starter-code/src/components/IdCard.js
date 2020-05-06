import React from "react";
import "./style.css";

const IdCard = (props) => {
  return (
    <div className='IdCard box'>
      <img src={props.picture} alt='' />
      <div className='right'>
        <strong>First name:</strong> {props.firstName}
        <br />
        <strong>Last name:</strong> {props.lastName}
        <br />
        <strong>Gender:</strong> {props.gender}
        <br />
        <strong>Height:</strong> {props.height}
        <br />
        <strong>strongirth:</strong> {props.birth.toDateString()}
      </div>
    </div>
  );
};

export default IdCard;
