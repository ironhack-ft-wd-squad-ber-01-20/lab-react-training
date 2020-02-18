import React, { Component } from "react";
import IdCard from "./components/idCard.jsx";
import Greetings from "./components/greetings.jsx";
import Random from "./components/random.jsx";
import BoxColor from "./components/boxColor.jsx";
import LikeButton from "./components/likeButton.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx";
import Carousel from "./components/Carousel.jsx";
import NumbersTable from "./components/NumberTable.jsx";
import FaceBook from "./components/FaceBook.jsx";

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
        <h1>LikeButton</h1>
        <LikeButton /> <LikeButton />
        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
        <h1>Dice</h1>
        <Dice />
        <h1>Carousel</h1>
        <Carousel
          imgs={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />
        <NumbersTable limit={12} />
        <FaceBook />
      </div>
    );
  }
}

export default App;
