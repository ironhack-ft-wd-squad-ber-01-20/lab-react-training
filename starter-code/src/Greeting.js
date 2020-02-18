import React from "react";

const Greetings = props => {
  const languages = {
    de: "Hallo",
    fr: "Bonjour"
  };
  // To make a space use {" "} between two objects
  if (props.lang === "de") {
    return (
      <h2>
        {languages.de} {props.children}
      </h2>
    );
  } else {
    return (
      <h2>
        {languages.fr} {props.children}
      </h2>
    );
  }
};

export default Greetings;
