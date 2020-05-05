import React from "react";

export default function IdCard(props) {
  const date = props.birth;
  const formattedDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
  return (
    <div className="container flex">
      <div>
        <img src={props.picture} alt="img" />
      </div>
      <div>
        <p className="no-margin">
          <strong>First name:</strong> {props.firstName}
        </p>
        <p className="no-margin">
          <strong>Last name:</strong> {props.lastName}
        </p>
        <p className="no-margin">
          <strong>Gender:</strong> {props.gender}
        </p>
        <p className="no-margin">
          <strong>Height:</strong> {props.height / 100}m
        </p>
        <p className="no-margin">
          <strong>Birth:</strong> {formattedDate}
        </p>
      </div>
    </div>
  );
}
