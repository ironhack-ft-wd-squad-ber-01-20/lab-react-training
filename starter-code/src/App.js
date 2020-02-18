import React, { Component } from "react";
import IdCard from "./IdCard";
import Greetings from "./Greeting";
import Random from "./Random";
import BoxColor from "./BoxColor";
// import NumbersTable from "./NumbersTable";
// import CreditCard from "./CreditCard";

// Declare variable for clickable images
const imagesPath = {
  minus: "/img/persons/maxence.png",
  plus: "/img/persons/maxence-glasses.png"
};

class LikeButton extends Component {
  // LikeButton
  state = {
    buttonText: "Like"
  };

  toggleLike = () => {
    if (this.state.buttonText === "Like") {
      // Set buttonText to 'Unlike' if it was 'Like'
      this.setState({
        buttonText: "Unlike"
      });
    } else if (this.state.buttonText === "Unlike") {
      // Set buttonText to 'Like' if it was 'Unlike'
      this.setState({
        buttonText: "Like"
      });
    }
  };
}

class App extends Component {
  // Clickable Image
  state = {
    open: true
  };

  ClickablePicture = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getPictureName = () => (this.state.open ? "plus" : "minus");

  render() {
    console.log("Render");
    console.log(this.state);

    const pictureName = this.getPictureName();

    return (
      <div className="App">
        <div>
          <img
            style={{ maxWidth: "200px" }}
            src={imagesPath[pictureName]}
            onClick={this.ClickablePicture}
            alt={this.pictureName}
          />
        </div>
        {/* TODO: Use the IdCard component */}
        {/* Like Button */}
        <button onClick={this.toggleLike}>{this.state.buttonText}</button>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height="178"
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height="172"
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        {/* Generate Random Numbers */}
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        {/* Box Color */}
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        {/* Credit Card */}
        {/* <CreditCard
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
        /> */}
      </div>
    );
  }
}

export default App;
