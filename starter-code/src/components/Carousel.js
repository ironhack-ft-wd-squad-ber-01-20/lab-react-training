import React, { useState } from "react";

const Carousel = (props) => {
  let [i, changeState] = useState(0);

  let goRight = () => {
    if (i === props.imgs.length - 1) i = -1;
    changeState((i = i + 1));
    // console.log(i);
  };

  let goLeft = () => {
    if (i === 0) i = props.imgs.length;
    changeState((i = i - 1));
    // console.log(i);
  };

  return (
    <div>
      <button onClick={() => goLeft()}>Left</button>
      <img src={props.imgs[i]} alt="" />
      <button onClick={() => goRight()}>Right</button>
    </div>
  );
};

export default Carousel;

// if (this.state.index === this.props.imgs.length - 1) {
//     this.setState({ index: 0 });
//   } else {
//     this.setState({ index: this.state.index + 1 });
//   }
