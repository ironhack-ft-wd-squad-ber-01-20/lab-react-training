import React, { Component } from 'react'; 

class ClickablePic extends Component {
    state= {
        clicked: false, 
    }; 
    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked, 
        }); 
    }; 
    render() {

        return (
            <div className="container">
            <img onClick={this.clickHandler} src={this.state.clicked ? this.props.imgClicked : this.props.img}/>
            </div>
        )  
    }
}




export default ClickablePic; 