import React, { Component } from 'react';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
          <IdCard
              picture='https://randomuser.me/api/portraits/men/44.jpg'
              firstName="John"
              lastName="Doe"
              gender="male"
              height="1.78 m"
              birth="Tue Jul 14 1992"
          />
          <IdCard 
              picture='https://randomuser.me/api/portraits/women/8.jpg'
              firstName="Obrien"
              lastName="Delores"
              gender="female"
              height="1.72 m"
              birth="Tue May 11 1993"
          />
    
        <h1>Greetings</h1>
            <Greetings
              lang='de'
              children='Ludwig'
            />
            <Greetings
              lang='fr'
              children='François'
            />  

        <h1>Random</h1>
            <Random
              min='1'
              max='6'
            />
            <Random
              min='1'
              max='100'
            />

      </div>
    );
  }
}

export default App;