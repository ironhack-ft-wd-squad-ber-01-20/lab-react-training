import React, { Component, Fragment } from 'react';

const Greetings = (props) => {
  let lang = { de: "Hallo", en: "Hi", es: "Hola", fr: "Bonjour" };
    return (
    <div className="box">
      <h3>
        {lang[props.lang]} {props.name}
      </h3>
    </div>
  );
};

export default Greetings;