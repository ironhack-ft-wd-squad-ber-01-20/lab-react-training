import React, { Component } from "react";
import profiles from "../data/berlin.json";

const profilesData = profiles;

class FaceBook extends Component {
  state = {
    profiles: profilesData,
  };

  render() {
    // const type = this.state.profiles.map((profile) => (
    //     if ({profile.isStudent}) {
    //     return <p>Student</p>
    //     }
    //     else { return <p>Teacher</p>));

    const profileItems = this.state.profiles.map((profile, index) => (
      <div key={index} className="profile-outer-container">
        <img src={profile.img}></img>
        <li className="profile-container">
          <p>
            <strong>First name: </strong>
            {profile.firstName}{" "}
          </p>
          <p>
            <strong>Last name: </strong>
            {profile.lastName}
          </p>
          <p>
            <strong>Country: </strong>
            {profile.country}
          </p>
          {/* {type} */}
        </li>
      </div>
    ));

    return <ul className="facebook">{profileItems}</ul>;
  }
}

export default FaceBook;
