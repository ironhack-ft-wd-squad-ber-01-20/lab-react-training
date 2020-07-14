import React, { Component } from 'react';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
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

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>



        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
