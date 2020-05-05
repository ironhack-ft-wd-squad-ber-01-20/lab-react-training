import React, { Component } from "react";
// let click = () => {
//   this.state.liked = !this.state.liked;
// };
class ClickablePicture extends Component {
  state = {
    liked: true,
  };

  render() {
    // let img = "/img/persons/maxence.png";
    // let img2 = "/img/persons/maxence-glasses.png";
    let click = () => {
      this.setState({ liked: !this.state.liked });
    };

    return (
      <div>
        <img
          src={this.state.liked ? this.props.img : this.props.imgClicked}
          onClick={click}
          style={{ maxWidth: "70px" }}
        ></img>
      </div>
    );
  }
}
export default ClickablePicture;
