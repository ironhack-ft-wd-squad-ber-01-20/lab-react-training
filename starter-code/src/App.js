import React, { Component } from "react";
import LikeButton from "./LikeButton";
import ClickablePicture from "./ClickablePicture";
import Dice from "./Dice";
// import Carousel from "./"
import NumbersTable from "./NumbersTable";
import FaceBook from "./FaceBook";

const IdCard = props => {
  return (
    <div>
      <img src={props.picture} alt="" />
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toDateString()}</p>
    </div>
  );
};

const Greetings = props => {
  let greeting = " ";
  if (props.lang === "de") {
    greeting = "Hallo";
  } else if (props.lang === "fr") {
    greeting = "Bonjour";
  }
  return (
    <div>
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};

const Random = props => {
  let randomNumber = Math.floor(Math.random() * Math.floor(props.max));

  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} => {randomNumber}
      </p>
    </div>
  );
};

const BoxColor = props => {
  const divStyle = {
    width: "300px",
    height: "60px",
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
  };

  return (
    <div style={divStyle}>
      rgb: {props.r}, {props.g}, {props.b}
    </div>
  );
};

const CreditCard = props => {
  const cardStyle = {
    width: "320px",
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column"
  };

  // const visaImage = {
  //   type: "Visa",
  //   img: "/img/visa.png"
  // };

  // const masterCardImage = {
  //   type: "Master Card",
  //   img: "/img/master-card.svg"
  // };

  return (
    <div style={cardStyle}>
      <p>{props.type}</p>
      <p> {props.number}</p>
      <p>
        Expires: {props.expirationMonth}/{props.expirationYear}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        }
        {
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        }
        <h1>Greetings</h1>
        {<Greetings lang="de">Ludwig</Greetings>}
        {<Greetings lang="fr">François</Greetings>}
        <h1>Random</h1>
        {<Random min={1} max={6} />}
        {<Random min={1} max={100} />}
        <h1>Box Color</h1>
        {<BoxColor r={255} g={0} b={0} />}
        {<BoxColor r={128} g={255} b={0} />}
        <h1>Credit Cards</h1>
        {
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
        }
        {
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
        }
        {
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
        }
        <h1>Like Button</h1>
        {<LikeButton />}
        {<LikeButton />}

        <h1>Clickable Picture</h1>
        {
          <ClickablePicture
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png"
          />
        }

        <h1>Dice</h1>
        {<Dice />}

        <h1>Carousel</h1>
        {/* {
          <Carousel
            imgs={[
              "https://randomuser.me/api/portraits/women/1.jpg",
              "https://randomuser.me/api/portraits/men/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
              "https://randomuser.me/api/portraits/men/2.jpg"
            ]}
          />
        } */}

        <h1>Numbers Table</h1>
        {<NumbersTable limit={12} />}

        <h1>Facebook</h1>
        {<FaceBook />}
      </div>
    );
  }
}

export default App;
