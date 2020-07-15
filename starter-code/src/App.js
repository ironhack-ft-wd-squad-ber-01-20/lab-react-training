import React, { Component } from 'react';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <div>
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
        </div>

        <h1>Greetings</h1>
            <Greetings
              lang='de'
              children='Ludwig'
            />
            <Greetings
              lang='fr'
              children='François'
            />

      </div>
    );
  }
}

export default App;