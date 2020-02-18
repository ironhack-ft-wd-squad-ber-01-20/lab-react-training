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
        {props.gender && (
          <span>
            <span className="label">Gender: </span> {props.gender} <br />
          </span>
        )}
        {props.birth && (
          <span>
            <span className="label">Birth: </span> {props.birth}
            <br />
          </span>
        )}
        {props.country && (
          <span>
            <span className="label">Country: </span> {props.country}
            <br />
          </span>
        )}
        {props.type && (
          <span>
            <span className="label">Type: </span>
            {props.type}
          </span>
        )}
        <br />
      </div>
    </div>
  );
};

export default IdCard;
