import React, { Component } from "react";
import profiles from "../data/berlin.json";

const profilesData = profiles;

class FaceBook extends Component {
  state = {
    profiles: profilesData,
  };

  render() {
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
          {profile.isStudent ? (
            <p>
              <strong>Type: </strong>Student
            </p>
          ) : (
            <p>
              <strong>Type: </strong>Teacher
            </p>
          )}
        </li>
      </div>
    ));

    return <ul className="facebook">{profileItems}</ul>;
  }
}

export default FaceBook;
