import React, { Component } from 'react';

class ClickablePicture extends Component {
    state = {
        img: this.props.img
    };

    clickHandler = () => {
       if(this.state.img == this.props.img){
           this.setState({
               img: this.props.imgClicked
           })
       } else {
           this.setState({
               img: this.props.img
           })
       }
       } 

render() {
    const style = {
       width: "200px"
    };

    return (
        <div>
        <img onClick = {this.clickHandler} style={style} src={this.state.img}/>
        </div>
    );
    };
};

export default ClickablePicture;