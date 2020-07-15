import React, { Component } from 'react';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

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
              color="white"
            />      
            <BoxColor 
              r={128} 
              g={255} 
              b={0}
              color="black" 
            />

          <h1>CreditCard</h1>
          <CreditCard 
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white" />
            <CreditCard 
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222" />
            <CreditCard 
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white" 
           />

      </div>
    );
  }
}

export default App;