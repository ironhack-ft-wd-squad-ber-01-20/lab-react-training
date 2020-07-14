import React, {Component} from 'react'; 

const colors= ["purple", "blue", "green", "yellow", "orange", "red"];

class LikeButton extends Component {
    state = {
        number: 0,  
    }; 
    clickHandler= () => {
        this.setState({
            number: 0, 
        }); 
    }; 
    render() {
        let buttoncolor=colors[this.state.likes % 6 ]
    return (
        <div>
            <button onClick={this.clickHandler} style={{backgroundColor: buttoncolor}}>{this.state.likes} Likes</button>
        </div>
    )
}
}


export default LikeButton;