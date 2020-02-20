import React from "react";
import profiles from "./data/berlin.json";

const FaceBook = props => {
  return profiles.map(profile => {
    const { firstName, lastName, country, isStudent } = profile;
    return (
      <div data={profile} className="facebookContainer">
        <img className="fbImage" src={profile.img} alt="" />
        <div className="fbInfo">
          <p>
            <strong>First name:</strong> {firstName}
          </p>
          <p>
            <strong>Last name:</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Country:</strong> {country}{" "}
          </p>
          <p>
            <strong>Type:</strong>{" "}
            {isStudent ? <span>Student</span> : <span>Teacher</span>}{" "}
          </p>
        </div>
      </div>
    );
  });
};

export default FaceBook;
