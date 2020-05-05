import React from 'react'
import './LikeButton.css';

class LikeButton extends React.Component {
    state={
        clickCount:0,
        backgroundColor:'yellow',
    }
    clickHandler=()=>{
        let colors=['purple','blue','green','yellow','orange','red'];
        this.setState({
            clickCount:this.state.clickCount+1,
            backgroundColor:colors[Math.floor(Math.random()* colors.length)],
        })
    }
    
    render(){
return(
<button onClick={this.clickHandler} style={{backgroundColor:`${this.state.backgroundColor}`}}>{this.state.clickCount} Likes</button>
);
    };
};

export default LikeButton;