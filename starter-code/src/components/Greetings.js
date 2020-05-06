import React from "react";
import "./style.css";

const languages = {
  de: "Hallo",
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
};

const Greetings = (props) => {
  let greeting = "";
  for (let g in languages) {
    if (props.lang === g) {
      greeting = languages[g];
    }
  }

  return (
    <div className='box'>
      {greeting} {props.children}
    </div>
  );
};

export default Greetings;
