import React, { Component } from "react";

const IdCard = props => {
  return (
    <div className="container idcard">
      <img src={props.picture} alt={props.firstName} />
      <div>
        <p>
          <span>First name:</span> {props.firstName}
          <br />
          <span>Last name:</span> {props.lastName}
          <br />
          <span>Gender:</span> {props.gender}
          <br />
          <span>Height:</span> {props.height}
          <br />
          <span>Birth:</span> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

const Greetings = props => {
  let greeting;
  if (props.lang === "de") {
    greeting = "Hallo";
  }

  if (props.lang === "fr") {
    greeting = "Bonjour";
  }

  if (props.lang === "en") {
    greeting = "Hello";
  }

  if (props.lang === "es") {
    greeting = "Hola";
  }

  return (
    <div className="container greetings">
      {greeting} {props.children}
    </div>
  );
};

const Random = props => {
  return (
    <div className="container">
      Random value between {props.min} and {props.max} =>{" "}
      {Math.floor(Math.random() * (props.max - props.min) + props.min)}
    </div>
  );
};

const BoxColor = props => {
  let rgbToHex = function(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  let red = rgbToHex(props.r);
  let green = rgbToHex(props.g);
  let blue = rgbToHex(props.b);
  let fullHex = "#" + red + green + blue;

  let divStyle = {
    backgroundColor: fullHex
  };

  return (
    <div className="container boxColor" style={divStyle}>
      <p>
        rgb({props.r},{props.b},{props.g})<br />
        {fullHex}
      </p>
    </div>
  );
};

const CreditCard = props => {
  // console.log(props.number);
  let num = props.number.toString();
  let creditCard = "•••• •••• •••• " + num.substring(num.length - 4);
  // console.log(creditCard);
  let divStyle = {
    backgroundColor: props.bgColor,
    color: props.color
  };

  let imgUrl;
  if (props.type === "Visa") {
    imgUrl = "/img/visa.png";
  }
  if (props.type === "Master Card") {
    imgUrl = "/img/master-card.svg";
  }
  return (
    <div className="creditCard" style={divStyle}>
      <p className="cardType">
        <img src={imgUrl} alt={props.type} height="20px" />
      </p>
      <p className="cardNumber">{creditCard}</p>
      <p>
        Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}
        <br />
        {props.owner}
      </p>
    </div>
  );
};

const Rating = props => {
  let rating = Math.round(props.children);

  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "★";
  }

  for (let i = rating; i < 5; i++) {
    stars += "☆";
  }

  return <div className="ratings">{stars}</div>;
};

const DriverCard = props => {
  return (
    <div className="driverCard">
      <img src={props.img} alt={props.name}></img>
      <div className="driverInfo">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <br />
        {props.car.model} - {props.car.licensePlate}
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>CreditCards</h1>
        <div className="creditCards">
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
        </div>

        <h1>Ratings</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriverCard</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>
    );
  }
}

export default App;
