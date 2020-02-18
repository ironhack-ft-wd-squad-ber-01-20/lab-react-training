import React from "react";

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.img
    };
  }

  handleClick = () => {
    if (this.state.image === this.props.img) {
      this.setState({
        image: this.props.imgClicked
      });
    } else {
      this.setState({
        image: this.props.img
      });
    }
  };

  render() {
    return <img onClick={this.handleClick} src={this.state.image}></img>;
  }
}

export default ClickablePicture;
