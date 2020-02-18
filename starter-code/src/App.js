import React, { Component } from "react";

function IdCard(props) {
  return (
    <div>
      <div className="idcard">
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>height: {props.height / 100} m</p>
        <p>birth: {props.birth.toDateString()}</p>
        <img
          src={props.picture}
          alt="profile_pic"
          height="150"
          width="150"
        ></img>
      </div>
    </div>
  );
}

function CreditCard(props) {
  let card = "";

  if (props.type === "Visa") {
    card = "/img/visa.png";
  }

  if (props.type === "Master Card") {
    card = "/img/master-card.svg";
  }

  return (
    <div>
      <div className="credit card">
        <p>type: {props.type}</p>
        <p>number: {props.number} </p>
        <p>expirationMonth: {props.month} </p>
        <p>expirationYear: {props.year} </p>
        <p>bank: {props.bank}</p>
        <p>owner: {props.owner}</p>
        <p>bgColor: {props.bgColor}</p>
        <p>color: {props.color}</p>
        <img src={card} alt="card_pic" height="50"></img>
      </div>
    </div>
  );
}

function Greetings(props) {
  console.log(props);

  let languages = { de: "Hallo", fr: "Bonjour", es: "Hola", en: "Hello" };

  let greeting = "";
  Object.keys(languages).forEach(key => {
    if (key === props.lang) {
      greeting = languages[key];
      console.log(greeting);
    }
  });

  return (
    <div class="greeting">
      <div>
        <p>
          {greeting} {props.children}
        </p>
      </div>
    </div>
  );
}

function Random(props) {
  console.log(props);

  let number = Math.floor(Math.random() * props.max);

  return (
    <div className="random">
      <div>
        <p>
          min={props.min} max={props.max} Random Number={number}
        </p>
      </div>
    </div>
  );
}

function BoxColor(props) {
  console.log(props);

  let rNumber = Math.floor(Math.random() * props.r);
  let gNumber = Math.floor(Math.random() * props.g);
  let bNumber = Math.floor(Math.random() * props.b);

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return (
      "'#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + "'"
    );
  }

  let hexColor = "backgroundColor: " + rgbToHex(rNumber, gNumber, bNumber);
  var divStyle = { backgroundColor: `rgb(${rNumber},${gNumber},${bNumber})` };

  return (
    <div class="boxcolor" style={divStyle}>
      <div>
        <p>
          r={rNumber} g={gNumber} b={bNumber} <p>{hexColor}</p>
        </p>
      </div>
    </div>
  );
}

class LikeButton extends React.Component {
  state = { count: 0, color: "#226688" };

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="likebutton">
        <p>Count: {this.state.count}</p>
        <button onClick={this.clickHandler}>Like me</button>
      </div>
    );
  }
}

let img = "/img/persons/maxence.png";
class ClickablePicture extends React.Component {
  state = { count: 0, color: "#226688" };

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    if (this.state.count % 2 === 0) {
      img = "/img/persons/maxence.png";
    } else img = "/img/persons/maxence-glasses.png";

    return (
      <div className="clickablepicture">
        <img
          class="clickablepicture"
          src={img}
          alt="pic"
          onClick={this.clickHandler}
        />
      </div>
    );
  }
}

class Dice extends React.Component {
  state = { count: 0, image: "/img/dice-empty.png" };

  clickHandler = () => {
    let number = Math.floor(Math.random() * 6);

    if (number === 1) {
      this.setState({ image: (this.state.image = "../img/dice1.png") });
    }
    if (number === 2) {
      this.setState({ image: (this.state.image = "../img/dice2.png") });
    }
    if (number === 3) {
      this.setState({ image: (this.state.image = "../img/dice3.png") });
    }
    if (number === 4) {
      this.setState({ image: (this.state.image = "../img/dice4.png") });
    }
    if (number === 5) {
      this.setState({ image: (this.state.image = "../img/dice5.png") });
    }
    if (number === 6) {
      this.setState({ image: (this.state.image = "../img/dice6.png") });
    } else img = "../img/dice-empty.png";

    console.log(this.state.count);
    console.log(this.state.image);
  };

  render() {
    return (
      <div className="dice">
        <img
          className="diceimage"
          src={this.state.image}
          onClick={this.clickHandler}
          alt=""
        />
      </div>
    );
  }
}

const imgs = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg"
];
let i = 0;

class Carousel extends React.Component {
  state = { image: imgs[i] };

  clickHandlerLeft = () => {
    i = (i + 1) % imgs.length;

    this.setState({
      image: (this.state.image = imgs[i])
    });
  };

  clickHandlerRight = () => {
    i = (i + 3) % imgs.length;

    this.setState({
      image: (this.state.image = imgs[i])
    });
  };

  render() {
    return (
      <div className="carrossell">
        <button onClick={this.clickHandlerLeft}>Left Click</button>
        <img className="carrossell" src={this.state.image} alt="" />
        <button onClick={this.clickHandlerRight}>Right Click</button>
      </div>
    );
  }
}

function NumbersTable(props) {
  console.log(props);

  const numbers = [1, 2, 3, 4, 5];

return (
<div>
<div class="square1">
  {numbers[i]}
  </div>

  <div class="square2">
  {numbers[i+1]}
  </div>
   </div>)
}

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

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1> State | LikeButton</h1>
        <LikeButton />

        <h1> Clickable Pictrue</h1>
        <ClickablePicture />

        <h1> Dice</h1>
        <Dice />

        <h1> Caroussel</h1>
        <Carousel />

        <h1> NumbersTable </h1>
        <NumbersTable limit={12} />
      </div>
    );
  }
}

export default App;
