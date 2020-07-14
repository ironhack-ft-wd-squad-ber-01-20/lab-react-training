import React, { useState } from "react"; //import the useState Hook from React

const ClickablePicture = (props) => {
  let [toggle, changeState] = useState(true); // useState returns 2 values: first is is a variable we name ourselves "toggle",
  // second is a function "togglePic", true is the initial value of toggle

  let src = props.img;
  toggle ? (src = props.img) : (src = props.imgClicked);

  const imgStyle = {
    width: "200px",
  };

  //   console.log(toggle);

  return (
    <img
      src={src}
      style={imgStyle}
      onClick={() => changeState((toggle = !toggle))}
      alt=""
    />
  );
};

export default ClickablePicture;
