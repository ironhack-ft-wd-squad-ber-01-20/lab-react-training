import React from "react";

const boxColor = props => {
  console.log(props);

  const styles = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`,
    height: "300px"
  };

  return (
    <div style={styles}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
};

export default boxColor;
