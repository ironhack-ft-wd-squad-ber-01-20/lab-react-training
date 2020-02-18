import React, { Component } from "react";

const IdCard = props => {
  //let birthDate = new Date(props.birth);
  return (
    <div className="id-card-container">
      <div className="id-card-image">
        <img src={props.picture} alt="" />
      </div>
      <div>
        <span className="label">First name: </span> {props.firstName} <br />
        <span className="label">Last name: </span> {props.lastName} <br />
        <span className="label">Gender: </span> {props.gender} <br />
        <span className="label">Birth: </span> {props.birth}
      </div>
    </div>
  );
};

export default IdCard;
