import React, { useState } from "react"; //import the useState Hook from React

const Dice = (props) => {
  let [url, changeState] = useState("./img/dice3.png");

  const imgStyle = { width: "200px" };
  const empty = "./img/dice-empty.png";
  const arr = [
    "./img/dice1.png",
    "./img/dice2.png",
    "./img/dice3.png",
    "./img/dice4.png",
    "./img/dice5.png",
    "./img/dice6.png",
  ];

  let handleClick = () => {
    changeState((url = empty));
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * arr.length);
      changeState((url = arr[randomIndex]));
    }, 1000);
  };

  // console.log(url);

  return (
    <img src={url} style={imgStyle} onClick={() => handleClick()} alt="" />
  );
};

export default Dice;
