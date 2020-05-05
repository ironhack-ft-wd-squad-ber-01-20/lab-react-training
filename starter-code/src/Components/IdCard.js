import React, { Fragment } from "react";

function IdCard(props) {
  return (
    <Fragment>
      <p> First Name: {props.firstName}</p>
      <p> Last Name: {props.lastName}</p>
      <p> Gender: {props.gender}</p>
      <p> Birthdate: {props.birth}</p>
      <img src={props.picture} />
    </Fragment>
  );
}

export default IdCard;
