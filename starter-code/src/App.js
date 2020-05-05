import React, { Component } from "react";
import IdCard from "./Components/IdCard";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";
import BoxColor from "./Components/BoxColor";

const App = () => {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height="178"
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      ></IdCard>

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height="172"
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      ></IdCard>

      <h1>Greetings</h1>
      <Greetings name="Markus" lang="nor"></Greetings>
      <Greetings name="François" lang="fr"></Greetings>

      <h1>Random</h1>
      <Random min="1" max="10"></Random>
      <Random min="1" max="999"></Random>

      <h1>Box Color</h1>
      <BoxColor back="rgb(255,0,0)" color="white"></BoxColor>
      <br />
      <BoxColor back="rgb(128,255,0)" color="black"></BoxColor>
      <h1>CreditCard</h1>
    </div>
  );
};

export default App;
