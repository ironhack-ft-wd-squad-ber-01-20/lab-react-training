import React, { Component } from 'react';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import Profiles from './data/berlin.json'


class App extends Component {

  render() {
    console.log(Profiles[0])
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        {Profiles && Profiles.map((profile, index) =>

          <IdCard key={index}
            lastName={profile.lastName}
            firstName={profile.firstName}
            gender={profile.gender}
            height={profile.height}
            birth={new Date("1988-05-11")}
            picture={profile.img}
          />
        )}
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />



      </div>
    );
  }
}

export default App;
