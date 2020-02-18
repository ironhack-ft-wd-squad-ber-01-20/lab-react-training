import React, { Component, Profiler } from "react";
import IdCard from "./IdCard.js";
import profiles from "./data/berlin.json";

const FaceBook = props => {
  const profileElements = profiles.map(profile => {
    //{"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},
    return (
      <IdCard
        lastName={profile.lastName}
        firstName={profile.firstName}
        country={profile.country}
        type={profile.isStudent ? "Student" : "Teacher"}
        picture={profile.img}
      />
    );
  });

  return <div className="profiles">{profileElements}</div>;
};

export default FaceBook;
