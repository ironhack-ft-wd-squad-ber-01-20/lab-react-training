import React, { Component } from "react";
import IdCard from "./Components/IdCard";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";
import BoxColor from "./Components/BoxColor";
import CreditCard from "./Components/CreditCard";
import Rating from "./Components/Rating";
import DriverCard from "./Components/DriverCard";
import LikeButton from "./Components/LikeButton";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";

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
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
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
      <h1>Ratings</h1>
      <Rating number="0"></Rating>
      <Rating number="1.49"></Rating>
      <Rating number="1.5"></Rating>
      <Rating number="3"></Rating>
      <Rating number="4"></Rating>
      <Rating number="5"></Rating>

      <h1>Driver Card</h1>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      />
      <h1>LikeButton</h1>
      <LikeButton />
      <LikeButton />
      <h1>Clickable</h1>
      {/* <ClickablePicture /> */}
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <h1>Dice</h1>
      <Dice />
    </div>
  );
};

export default App;
