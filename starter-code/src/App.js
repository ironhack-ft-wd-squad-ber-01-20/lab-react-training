import React, { Component, Fragment } from "react";
import IdCard from "./Components/IdCard.js";
import Greetings from "./Components/Greetings.js";
import Random from "./Components/Random.js";
import Boxcolor from "./Components/Boxcolor.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {
          <Fragment>
            <IdCard
              lastName="Doe"
              firstName="John"
              gender="male"
              height={178}
              birth={new Date("1992-07-14").toDateString()}
              image="https://randomuser.me/api/portraits/men/44.jpg"
            />
            <IdCard
              lastName="Obrien"
              firstName="Delores"
              gender="female"
              height={172}
              birth={new Date("1993-05-11").toDateString()}
              image="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </Fragment>
        }
        <h1>Greetings</h1>
        {
          <Fragment>
            <Greetings lang="de">
              <h1>Hallo Ludwig</h1>
            </Greetings>
            <Greetings lang="fr">
              <h1>Bonjour Francois</h1>
            </Greetings>
          </Fragment>
        }
        <h1>Random Number</h1>
        {
          <Fragment>
            <p>Random Number between 1 and 6</p>
            <Random min={1} max={6} />
            <p>Random Number between 1 and 100</p>
            <Random min={1} max={100} />
          </Fragment>
        }
        <h1>BoxColor</h1>
        <Fragment>
          <Boxcolor r={255} g={0} b={0} />
          <Boxcolor r={128} g={255} b={0} />
        </Fragment>
      </div>
    );
  }
}

export default App;
