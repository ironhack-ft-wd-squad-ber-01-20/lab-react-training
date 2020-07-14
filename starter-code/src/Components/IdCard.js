import React, { Component, Fragment } from 'react'

function IdCard(props) {
  return (
    <Fragment>
      <p> First Name: {props.firstName} </p>
      <p> Last Name: {props.lastName} </p>
      <p> Gender: {props.gender} </p>
      <p> Height: {props.height} </p>
      <p> Birthdate: {props.birth} </p>
      <p> Picture: {props.picture} </p>
      <img src={props.picture} alt="leo" />
    </Fragment>
  );
}

export default IdCard;