import React, { Component } from "react";

const NumbersTable = props => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    margin: "10px"
  };
  const redStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    textAlign: "center",
    border: "1px solid black",
    backgroundColor: "red"
  };
  const whiteStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    textAlign: "center",
    border: "1px solid black",
    backgroundColor: "white"
  };

  let elements = [];
  for (let i = 0; i < props.limit; i++) {
    let style = i % 2 == 0 ? redStyle : whiteStyle;
    elements.push(
      <div style={style} key={i}>
        <p>{i}</p>
      </div>
    );
  }

  return (
    <div className="numbers-container" style={containerStyle}>
      {elements}
    </div>
  );
};

export default NumbersTable;
