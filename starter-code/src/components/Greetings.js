import React from "react";

export default function Greetings(props) {
  let greetings = "Hallo";
  if (props.lang === "fr") greetings = "Bonjour";
  return (
    <div className="container">
      <h3>
        {greetings} {props.children}
      </h3>
    </div>
  );
}
