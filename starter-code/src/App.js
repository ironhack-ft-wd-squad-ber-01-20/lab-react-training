import React, { Component } from 'react';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random'
import BoxColor from './components/BoxColor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard firstName="Joshua" lastName="Klausen" gender="male" height="1,80m" birth="1992-07-14" picture="https://randomuser.me/api/portraits/men/44.jpg"/>
        <IdCard firstName="Obrien" lastName="Delores" gender="female" height="1,70m" birth="1993-07-14" picture="https://randomuser.me/api/portraits/women/8.jpg"/>
        
        <h1>Greetings</h1>
        <Greetings lang="de" name="Klaus" />
        <Greetings lang="fr" name="Francois" />
        
        <h1>Random</h1>
        <Random min="1" max="6" />
        <Random min="7" max="44" />

        <h1>Box Color</h1>
        <BoxColor r="255" g="0" b="0"/>
        <BoxColor r="128" g="255" b="0"/>
      </div>
    );
  }
}

export default App;