import React from "react";

const Greetings = (props) => {
  const language = () => {
    if (props.lang === "de") return "Hallo";
    if (props.lang === "fr") return "Bonjour";
  };

  return (
    <div>
      {language()} {props.children}
    </div>
  );
};

export default Greetings;
