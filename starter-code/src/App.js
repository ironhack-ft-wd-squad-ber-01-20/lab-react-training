import React, { Component } from 'react';
import IdCard from "./Components/IdCard"
import Greetings from './Components/Greetings';
import Random from "./Components/Random";


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
      />

      <IdCard
        lastName="O'Brien"
        firstName="Delores"
        gender="female"
        height="172"
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings name="Markus" lang="de"></Greetings>
      <Greetings name="François" lang="fr"></Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

    </div>
  );
}

export default App;
