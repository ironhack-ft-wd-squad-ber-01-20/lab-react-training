import React from "react";

const greetings = props => {
  let greetingLang = "";
  const languages = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  };

  Object.keys(languages).forEach(language => {
    if (language === props.lang) {
      greetingLang = languages[language];
    }
  });

  return (
    <div>
      <p lang={props.lang}>
        {greetingLang} {props.children}
      </p>
    </div>
  );
};

export default greetings;
