import React from "react";

class ClickablePicture extends React.Component {
  state = {
    img: "img"
  };

  togglePicture = () => {
    if (this.state.img === "img") {
      this.setState({
        img: "imgClicked"
      });
    } else if (this.state.img === "imgClicked") {
      this.setState({
        img: "img"
      });
    }
  };

  render() {
    let imgUrl = this.state.img;
    return (
      <img
        className="clickablePicture"
        src={this.props[imgUrl]}
        alt={this.state.img}
        onClick={this.togglePicture}
      />
    );
  }
}

export default ClickablePicture;
