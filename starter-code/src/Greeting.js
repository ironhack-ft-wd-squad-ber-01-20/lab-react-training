import React, { Component } from "react";

const Greeting = props => {
  let greeting = "";
  if (props.lang == "de") {
    greeting = "Hallo";
  } else if (props.lang == "fr") {
    greeting = "Bonjour";
  }
  greeting += " " + props.children;

  return <div className="greeting">{greeting}</div>;
};

export default Greeting;
