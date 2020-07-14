import React, { Component } from 'react'; 

class Dice extends Component {
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
            
            </div>
        )  
    }
}

export default Dice; 