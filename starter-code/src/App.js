import React, { Component } from "react";

const style = {
  border: "2px solid black",
  padding: "10px",
  margin: "10px"
};

//Components | IdCard
const IdCard = props => {
  return (
    <div style={style}>
      <img src={props.picture} />
      <span> First name:</span>
      {props.firstName}
      <span>Last name:</span>
      {props.lastName}
      <span>Gender:</span> {props.gender}
      <span>Height:</span>
      {props.height}cm
      <span>Birth:</span>
      {props.birth.toDateString()}
    </div>
  );
};

//Components | Greetings done!
const Greetings = props => {
  let greetings;

  if (props.lang === "de") {
    greetings = "Hallo";
  }

  if (props.lang === "en") {
    greetings = "Hello";
  }

  if (props.lang === "es") {
    greetings = "Hola";
  }

  if (props.lang === "fr") {
    greetings = "Bonjour";
  }

  return (
    <div style={style}>
      {greetings} {props.children}
    </div>
  );
};

//Components | Random done!
const Random = props => {
  let randomNum = Math.floor(Math.random() * 6);
  return randomNum + 1;
};

const Random1 = props => {
  let randomNum = Math.floor(Math.random() * 101);
  return randomNum + 1;
};

//Components | BoxColor
// const RandomNumber = () => {
//   let randomNum = Math.floor(Math.random() * 256);
//   return randomNum + 1;
// };
// const BoxColor = props => {
//   return <div>{props.r.RandomNumber}</div>;
// };

//Components | CreditCard
const cardstyle = {
  border: "1px solid black",
  height: "250px",
  width: "400px"
};

const CreditCard = props => {
  return (
    <div style={cardstyle}>
      {props.type}
      {props.number}
      {props.expirationMonth}
      {props.expirationYear}
      {props.bank}
      {props.owner}
      {props.bgColor}
      {props.color}
    </div>
  );
};

//Components | Rating

//Components | DriverCard

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
        <Greetings lang="de"> Ludwig</Greetings>
        <Greetings lang="fr"> François</Greetings>

        <h1>Random</h1>
        <p style={style}>
          Random value between 1 and 6 => <Random>6</Random>
        </p>
        <p style={style}>
          Random value between 1 and 100 => <Random1>99</Random1>
        </p>
        <br />
        <h1>Box color</h1>
        <h1>Credit Card</h1>
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
        <Button />
        <ClickablePicture />
        <Dice />
        <Carousel />
      </div>
    );
  }
}

//State | LikeButton not done
class Button extends Component {
  state = {
    count: 0
  };

  style = {
    background: "red"
  };

  toggleLike = () => {
    this.setState({
      count: this.state.count + 1
    });

    this.syle = () => {
      this.colorArr.forEach = i => {
        this.style.background.push(i);
      };
    };
  };

  render() {
    return (
      <div>
        <h1>LikeButton</h1>
        <button style={this.style} onClick={this.toggleLike}>
          {this.state.count}
          Likes
        </button>
      </div>
    );
  }
}

//State | ClickablePicture done!
class ClickablePicture extends Component {
  state = {
    img: "/img/persons/maxence.png"
  };

  imgClick = () => {
    if (this.state.img === "/img/persons/maxence.png") {
      this.setState({
        img: "/img/persons/maxence-glasses.png"
      });
    } else if (this.state.img === "/img/persons/maxence-glasses.png") {
      this.setState({
        img: "/img/persons/maxence.png"
      });
    }
  };

  render() {
    return (
      <div>
        <h1>ClickablePicture</h1>
        <img
          style={{ height: "200px" }}
          onClick={this.imgClick}
          src={this.state.img}
        />
      </div>
    );
  }
}

//State | Dice
class Dice extends Component {
  state = {
    img: `img/dice${Math.floor(Math.random() * (6 - 1) + 1)}.png`
  };

  clickedDice = () => {
    this.setState({
      img: "/img/dice-empty.png"
    });

    setTimeout(() => {
      this.setState({
        img: `img/dice${Math.floor(Math.random() * (7 - 1) + 1)}.png`
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>Dice</h1>
        <img
          style={{ height: "200px" }}
          onClick={this.clickedDice}
          src={this.state.img}
        />
      </div>
    );
  }
}

//State | Carousel done!
class Carousel extends Component {
  state = {
    counter: 0,
    imgs: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg"
    ]
  };

  handleClick = num => {
    if (this.state.counter + num < 0) {
      num = this.state.imgs.length - 1;
      //this.state.counter + numが０より小さくなると、this.state.imgs.length(この場合は４) - 1＝この場合は３枚目の写真になる。
    }
    //console.log("num", num);

    this.setState({
      counter: (this.state.counter + num) % this.state.imgs.length
      // num is 1, this.state.counter starts from 0
    });
  };

  render() {
    return (
      <div>
        <h1>Carousel</h1>
        <button
          onClick={() => this.handleClick(-1)}
          style={{ width: "50px", height: "20px" }}
        >
          Left
        </button>
        <img
          style={{ height: "200px" }}
          src={this.state.imgs[this.state.counter]}
        />
        <button
          onClick={() => this.handleClick(1)}
          style={{ width: "50px", height: "20px" }}
        >
          Right
        </button>
      </div>
    );
  }
}

export default App;
