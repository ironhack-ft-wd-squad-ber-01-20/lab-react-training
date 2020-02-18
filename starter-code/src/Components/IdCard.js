import React from "react";

const IdCard = props => {
  return (
    <div className="container idcard">
      <img src={props.picture} alt={props.firstName} />
      <div>
        <p>
          <span>First name:</span> {props.firstName}
          <br />
          <span>Last name:</span> {props.lastName}
          <br />
          <span>Gender:</span> {props.gender}
          <br />
          <span>Height:</span> {props.height / 100}m
          <br />
          <span>Birth:</span> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
