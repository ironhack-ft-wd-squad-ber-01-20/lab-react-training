import profiles from "../data/berlin.json";

import React, { useReducer } from "react";

const FaceBook = () => {
  console.log(profiles);

  return (
    <div>
      {profiles.map(user => {
        return (
          <div className="idCard">
            <div className="img-box">
              <img src={user.img}></img>
            </div>
            <div className="data-box">
              <p>First name: {user.firstName}</p>
              <p>Last name: {user.lastName}</p>
              <p>Country: {user.country}</p>
              <p>Type: {user.isStudent ? "Student" : "Teacher"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
