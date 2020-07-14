import React, { useState } from "react";

const LikeButton = (props) => {
  let [num, changeState] = useState(0);

  return (
    <div>
      <button onClick={() => changeState((num = num + 1))}>{num} Like</button>
    </div>
  );
};

export default LikeButton;

// if (this.state.index === this.props.imgs.length - 1) {
//     this.setState({ index: 0 });
//   } else {
//     this.setState({ index: this.state.index + 1 });
//   }
