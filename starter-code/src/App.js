import React, { Component } from "react";
import profiles from "./data/berlin.json";

const IdCard = props => {
  return (
    <ul>
      <img src={props.picture} />
      <li>First name:{props.firstName}</li>
      <li>Last name: {props.lastName}</li>
      <li>Gender: {props.gender}</li>
      <li>Height: {props.height}</li>
      <li>Birth: {props.birth}</li>
    </ul>
  );
};

const Greetings = props => {
  let language = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  };
  let greeting = language[props.lang];

  return (
    <p>
      {greeting} {props.children}
    </p>
  );
};

const Random = props => {
  console.log(props);
  let randomValue = Math.floor(Math.random() * props.max) + props.min;
  console.log(randomValue);
  return (
    <p>
      Random value between {props.min} and {props.max} => {randomValue}
    </p>
  );
};

const BoxColor = props => {
  console.log(props);
  const definedStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    border: "1px solid black",
    padding: "50px"
  };
  return (
    <div style={definedStyle}>
      rgb{props.r}, {props.g}, {props.b}
    </div>
  );
};

class Like extends React.Component {
  state = {
    buttonText: "Like",
    numberLikes: 0
  };
  handleClick = () => {
    this.setState({
      numberLikes: this.state.numberLikes + 1
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.numberLikes}Likes
        </button>
      </div>
    );
  }
}

class Picture extends Component {
  state = {
    image: "/img/persons/maxence.png"
  };

  togglePicture = () => {
    if (this.state.image === "/img/persons/maxence.png") {
      this.setState({
        image: "/img/persons/maxence-glasses.png"
      });
    } else if (this.state.image === "/img/persons/maxence-glasses.png") {
      this.setState({
        image: "/img/persons/maxence.png"
      });
    }
  };

  render() {
    console.log(this.state.image);
    return (
      <div>
        <img onClick={this.togglePicture} src={this.state.image}></img>
      </div>
    );
  }
}

const diceImage = {
  0: "/img/dice-empty.png",
  1: "/img/dice1.png",
  2: "/img/dice2.png",
  3: "/img/dice3.png",
  4: "/img/dice4.png",
  5: "/img/dice5.png",
  6: "/img/dice6.png"
};

class Dice extends Component {
  state = {
    value: 0
  };

  randomNum = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  toggleDice = () => {
    this.setState({
      value: this.randomNum()
    });
  };
  render() {
    return (
      <div>
        <img
          class="dice"
          onClick={this.toggleDice}
          src={diceImage[this.state.value]}
        />
      </div>
    );
  }
}

const NumbersTable = props => {
  console.log(props);
  const numbers = [];
  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i);
  }

  const numeros = numbers.map(num => {
    if (num % 2 == 0) {
      return <p className="even">{num}</p>;
    } else {
      return <p className="numbersTable">{num}</p>;
    }
  });
  return <div className="numGrid">{numeros}</div>;
  console.log(numbers);
  console.log(numeros);
};

/* class NumbersTable extends Component {
  render () {
    return ()
  } */

const FaceBook = props => {
  return profiles.map(profile => {
    return (
      <div class="facebook">
        <img src={profile.img} />
        <p>First Name: {profile.firstName}</p>
        <p>Last Name: {profile.lastName}</p>
        <p>Country: {profile.country}</p>
        <p>Type: {profile.isStudent === true ? "Student" : "Teacher"}</p>
      </div>
    );
  });
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
          birth={new Date("1992-07-14").toDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11").toDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <h2>Like Buttons</h2>
        <Like /> <Like />
        <h2>Cliclable Picture</h2>
        <Picture />
        <h2>Dice</h2>
        <Dice />
        <h2>Numbers Table</h2>
        <div className="allNums">
          <NumbersTable limit={12} />
        </div>
        <h2>Facebook</h2>
        <FaceBook />
      </div>
    );
  }
}

export default App;
