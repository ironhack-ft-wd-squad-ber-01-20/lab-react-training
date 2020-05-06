import React, { Component } from 'react';

    class LikeButton extends Component {
        state = {
            clickCount: 0,
            background : "purple"
        }
       
        clickHandler = () => {
            let colors = ['purple','blue','green','yellow','orange','red']
            this.setState({
                clickCount: this.state.clickCount + 1,
                background : colors[Math.floor(Math.random() * colors.length)]
            })
        }
        render() {
            
          
          return (
            <>
              <button className = "likeButton"style = {{backgroundColor : this.state.background}} onClick={this.clickHandler}>{this.state.clickCount} likes</button>
            </>
          )
        }
      }

export default LikeButton;