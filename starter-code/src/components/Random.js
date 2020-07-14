import React, { Component, Fragment } from "react";

const Random = (props) => {
  const number = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }
  return (
    <div>
        Random value between {props.min} and {props.max} {'=>'} {number(props.min, props.max)}
    </div>
  );
};

export default Random;
