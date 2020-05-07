import React, { Component } from "react";

class App extends Component {

state = {
    clicked: true
}
clicked = () => {
    this.setstate({
        clicked: !this.setstate.clicked
    })
}
render() {
return (
<div>
    <img  src= {this.state.clicked? this.props.img :this.props.imgClicked}
          onClick={this.clicked}
         />
</div>

)
}



}