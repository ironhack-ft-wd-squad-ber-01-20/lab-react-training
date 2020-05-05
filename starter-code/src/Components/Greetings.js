import React, { Fragment } from "react";

function Greetings(props) {
  let greetlang = { fr: "Salut", es: "Hola", nor: "Hei" };
  return (
    <Fragment>
      <h3>
        {greetlang[props.lang]} {props.name}
      </h3>
    </Fragment>
  );
}
export default Greetings;
