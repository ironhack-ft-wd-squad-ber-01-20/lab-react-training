import React, {Component} from "react";



class LikeButton extends Component {

state ={
    clickCount: 0
}
clickHandler = () => {
    const newCount = this.state.clickCount + 1
    if (newCount !== 2) {
        this.setState({
          clickCount: newCount,
          backColor: this.colorMapper()
        });
      } else {
        this.setState({
          clickCount: newCount,
          backColor: "yellow",
        })
   
  };
}
colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

render () {
    return (
        <div className = "btn">
            <button onClick={this.clickHandler}>{this.state.clickCount}Likes</button>
        </div>
    )
}

}

export default LikeButton;