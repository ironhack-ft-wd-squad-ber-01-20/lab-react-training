import React from "react";
import profiles from "../data/berlin.json";

const FaceBook = props => {
  const data = profiles.map(profile => {
    return (
      <div key={profile.firstName} className="faceBook container">
        <img src={profile.img} alt={profile.firstName} />
        <div>
          <span>First name: </span>
          {profile.firstName}
          <br />
          <span>Last name: </span>
          {profile.lastName}
          <br />
          <span>Country: </span> {profile.country}
          <br />
          <span>Type: </span>
          {profile.isStudent ? "Student" : "Teacher"}
        </div>
      </div>
    );
  });

  return <div>{data}</div>;
};

export default FaceBook;
