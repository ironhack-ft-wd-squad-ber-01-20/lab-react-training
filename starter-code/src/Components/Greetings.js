import React from "react";

const Greetings = props => {
  let greeting;
  if (props.lang === "de") {
    greeting = "Hallo";
  }

  if (props.lang === "fr") {
    greeting = "Bonjour";
  }

  if (props.lang === "en") {
    greeting = "Hello";
  }

  if (props.lang === "es") {
    greeting = "Hola";
  }

  return (
    <div className="container greetings">
      {greeting} {props.children}
    </div>
  );
};

export default Greetings;
