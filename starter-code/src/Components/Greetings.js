import React, { Component, Fragment } from 'react';

function Greetings(props) {
  let lang = { de: "Hallo", en: "Hi", es: "Hola", fr: "Salut" };
    return (
    <Fragment>
      <h3>
        {lang[props.lang]} {props.name}
      </h3>
    </Fragment>
  );
}

export default Greetings;
