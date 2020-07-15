import React, { Component } from 'react';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

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
              min={1}
              max={6}
            />
            <Random
              min={1}
              max={100}
            />
          
          <h1>BoxColor</h1>
            <BoxColor 
              r={255} 
              g={0} 
              b={0} 
            />      
            <BoxColor 
              r={128} 
              g={255} 
              b={0} 
            />
      </div>
    );
  }
}

export default App;