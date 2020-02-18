import React, { Component } from "react";

// ID CARD
const IdCard = props => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return (
    <div className="border-box">
      <div className="id-photo">
        <img src={props.picture} alt="portrait"></img>
      </div>
      <div className="id-details">
        <p>
          <span>First name: </span>
          {props.firstName}
        </p>
        <p>
          <span>Last name: </span>
          {props.lastName}
        </p>
        <p>
          <span>Gender: </span>
          {props.gender}
        </p>
        <p>
          <span>Height: </span>
          {props.height}
        </p>
        <p>
          <span>Birth: </span>
          {props.birth.toLocaleDateString("en-US", options)}
        </p>
      </div>
    </div>
  );
};

// GREETINGS
const Greetings = props => {
  const hello = { de: "Hallo", en: "Hello", es: "Hola", fr: "Bonjour" };

  let helloStr = "";

  Object.keys(hello).forEach(key => {
    if (props.lang === key) {
      helloStr = hello[key];
    }
  });
  console.log(helloStr);

  return (
    <div className="border-box">
      <p>
        {helloStr} {props.children}
      </p>
    </div>
  );
};

// RANDOM
const Random = props => {
  function getRandomWithinRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let min = props.min;
  let max = props.max;

  return (
    <div className="border-box">
      <p>
        Random value between {min} and {max} => {getRandomWithinRange(min, max)}
      </p>
    </div>
  );
};

// BOX COLOR
const BoxColor = props => {
  function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  }

  let rValue = props.r;
  let gValue = props.g;
  let bValue = props.b;

  const styles = {
    backgroundColor: "rgb(" + rValue + "," + gValue + "," + bValue
  };

  return (
    <div className="border-box box-color" style={styles}>
      <p>
        rgb({rValue}, {gValue}. {bValue})
      </p>
      <p>{RGBToHex(rValue, gValue, bValue)}</p>
    </div>
  );
};

// CREDIT CARD
const CreditCard = props => {
  const styles = {
    backgroundColor: props.bgColor
  };
  let cardNumber = props.number;
  let lastFour = cardNumber.slice(cardNumber.length - 4);

  const cardLogoUrl = [
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
  ];

  let logo;

  if (props.type === "Visa") {
    logo = cardLogoUrl[0];
  } else if (props.type === "Master Card") {
    logo = cardLogoUrl[1];
  }

  return (
    <div className="credit-card" style={styles}>
      <div className="card-type">
        <img src={logo} alt="bank logo"></img>
      </div>

      <div className="card-number">
        <p>•••• •••• •••• {lastFour}</p>
      </div>

      <div className="card-details">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}{" "}
          <span>{props.bank}</span>
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

// RATING
const Rating = props => {
  let stars = "";
  if (props.children < 1) {
    stars = "☆☆☆☆☆";
    return (
      <div>
        <p className="stars">{stars}</p>
      </div>
    );
  } else if (props.children < 1.5) {
    stars = "★☆☆☆☆";
    return (
      <div>
        <p className="stars">{stars}</p>
      </div>
    );
  } else if (props.children < 2.5) {
    stars = "★★☆☆☆";
    return (
      <div>
        <p className="stars">{stars}</p>
      </div>
    );
  } else if (props.children < 3.5) {
    stars = "★★★☆☆";
    return (
      <div>
        <p className="stars">{stars}</p>
      </div>
    );
  } else if (props.children < 4.5) {
    stars = "★★★★☆";
    return (
      <div>
        <p className="stars">{stars}</p>
      </div>
    );
  } else {
    stars = "★★★★★";
    return (
      <div>
        <p className="stars">{stars}</p>
      </div>
    );
  }
};

// DRIVER CARD
const DriverCard = props => {
  return (
    <div className="driver-card">
      <div className="driver-photo">
        <img className="image-cropper" src={props.img} alt="driver"></img>
      </div>
      <div className="driver-details">
        <h2 className="driver-name">{props.name}</h2>
        {/* <p className="stars">{props.rating}</p> */}
        <Rating>{props.rating}</Rating>
        <p className="driver-car">
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

// LIKE BUTTON CLASS COMPONENT
class LikeButton extends Component {
  state = {
    numberOfLikes: 0
  };

  handleClick = () => {
    this.setState({ numberOfLikes: this.state.numberOfLikes + 1 });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.numberOfLikes} Likes
      </button>
    );
  }
}

// CLICKABLE PICTURE CLASS COMPONENT
// class ClickablePicture extends Component {
//   constructor(props) {
//     super(props);

//     this.picture = props.img;
//     this.glasses = props.imgClicked;
//   }

//   state = {
//     picture: this.picture,
//     isGlasses: false
//   };

//   handleClick = () => {
//     if (this.state.isGlasses) {
//       this.setState({ picture: this.glasses, isGlasses: false });
//     } else {
//       this.setState({ picture: this.picture, isGlasses: true });
//     }
//   };

//   render() {
//     if(!this.state.picture){

//     }

//     return (
//       <div>
//         <img
//           onClick={this.handleClick}
//           src={this.state.picture}
//           alt="maxence"
//         ></img>
//       </div>
//     );
//   }
// }

// CLICKABLE PICTURE FUNCTIONAL COMPONENT
const ClickablePicture = props => {
  return (
    <div>
      <img
        className="maxence"
        onClick={props.handleClick}
        src={props.img}
        alt="maxence"
      ></img>
    </div>
  );
};

// DICE CLASS COMPONENT
class Dice extends Component {
  constructor() {
    super();
    this.diceArr = [
      "/img/dice-empty.png",
      "/img/dice1.png",
      "/img/dice2.png",
      "/img/dice3.png",
      "/img/dice4.png",
      "/img/dice5.png",
      "/img/dice6.png",
      "/img/dice7.png"
    ];
    this.randomIndex = Math.floor(Math.random() * this.diceArr.length);
  }

  state = {
    url: "/img/dice3.png"
  };

  handleClick = () => {
    this.setState({ url: this.diceArr[0] });

    setTimeout(() => {
      this.randomIndex = Math.floor(Math.random() * this.diceArr.length);
      this.setState({ url: this.diceArr[this.randomIndex] });
    }, 1000);
  };

  render() {
    return (
      <img
        class="dice"
        onClick={this.handleClick}
        src={this.state.url}
        alt="dice"
      ></img>
    );
  }
}

// CAROUSEL CLASS COMPONENT
class Carousel extends Component {
  state = {
    url: this.props[this.index]
  };

  render() {
    return <img src={this.state.url} alt="carousel"></img>;
  }
}

// APP CLASS
class App extends Component {
  state = {
    picture: "/img/persons/maxence.png"
  };

  handleClick = () => {
    console.log(this.state.picture);
    //this.setState({ picture: this.glasses });

    if (this.state.picture == "/img/persons/maxence.png") {
      this.setState({ picture: "/img/persons/maxence-glasses.png" });
    } else {
      this.setState({ picture: "/img/persons/maxence.png" });
    }
  };

  render() {
    return (
      <div className="App">
        {/* ID CARD */}
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="http://randomuser.me/api/portraits/men/44.jpg"
        ></IdCard>

        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1985-05-11")}
          picture="http://randomuser.me/api/portraits/women/44.jpg"
        ></IdCard>

        {/* GREETINGS */}
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        {/* CREDIT CARD */}
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

        {/* RATING */}
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        {/* DRIVER CARD */}
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

        {/* LIKE BUTTON */}
        <h1>LikeButton</h1>
        <LikeButton></LikeButton>

        {/* CLICKABLE PICTURE */}
        <h1>ClickablePicture</h1>
        <ClickablePicture
          img={this.state.picture}
          handleClick={this.handleClick}
        />

        {/* DICE */}
        <h1>Dice</h1>
        <Dice />

        {/* CAROUSEL */}
        <h1>Carousel</h1>
        <Carousel
          imgs={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />
      </div>
    );
  }
}

export default App;
