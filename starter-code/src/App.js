import React, { Component } from "react";
import IdCard from "./Components/IdCard";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";
import BoxColor from "./Components/BoxColor";
import CreditCard from "./Components/CreditCard";
import Rating from "./Components/Rating";
import DriverCard from "./Components/DriverCard";

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
        <h1>LikeButton</h1>
        <LikeButton /> <LikeButton />
        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
        <h1>Dice</h1>
        <Dice />
      </div>
    );
  }
}

class LikeButton extends React.Component {
  state = {
    count: 0,
    backgroundColor: ""
  };

  handleClick = () => {
    let color = ["purple", "blue", "green", "yellow", "orange", "red"];
    let randomColor = color[Math.floor(Math.random() * color.length)];

    this.setState({
      count: this.state.count + 1,
      style: { backgroundColor: randomColor }
    });
  };

  render() {
    return (
      <button
        className="likeButton"
        onClick={this.handleClick}
        style={this.state.style}
      >
        {this.state.count} Likes
      </button>
    );
  }
}

class ClickablePicture extends React.Component {
  state = {
    img: "img"
  };

  togglePicture = () => {
    if (this.state.img === "img") {
      this.setState({
        img: "imgClicked"
      });
    } else if (this.state.img === "imgClicked") {
      this.setState({
        img: "img"
      });
    }
  };

  render() {
    let imgUrl = this.state.img;
    return (
      <img
        className="clickablePicture"
        src={this.props[imgUrl]}
        alt={this.state.img}
        onClick={this.togglePicture}
      />
    );
  }
}

class Dice extends React.Component {
  state = {
    imgUrl: "/img/dice1.png"
  };

  diceClick = () => {
    let randomNumber = Math.ceil(Math.random() * 6);
    let randomImage = "/img/dice" + randomNumber + ".png";

    this.setState({
      imgUrl: "/img/dice-empty.png"
    });
    setTimeout(() => {
      this.setState({
        imgUrl: randomImage
      });
    }, 1000);
  };

  render() {
    // let imgUrl = "/img/dice" + this.state.number + ".png";
    // console.log(imgUrl);
    return (
      <div className="dice">
        <img src={this.state.imgUrl} alt="dice" onClick={this.diceClick} />
      </div>
    );
  }
}

export default App;
