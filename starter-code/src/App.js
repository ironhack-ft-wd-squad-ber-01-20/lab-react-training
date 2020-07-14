import React, { Component } from 'react';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton';

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
          color="white" />

          <h1>Rating</h1>
          <Rating rating="0" />
          <Rating rating="1.49" />
          <Rating rating="1.5" />
          <Rating rating="3" />
          <Rating rating="4" />
          <Rating rating="5" />

          <h1>Driver Card</h1>
          <DriverCard 
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }} />
          <DriverCard 
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }} />
          
          <h1>Like Button</h1>
          <LikeButton color="blue"/>
          <LikeButton color="green"/>
          <LikeButton color="red"/>
      </div>
    );
  }
}

export default App;