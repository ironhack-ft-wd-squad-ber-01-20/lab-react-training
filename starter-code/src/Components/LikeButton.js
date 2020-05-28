import React from 'react';
import './style.css';


class LikeButton extends React.Component {
    state = {
        count: 0,
        liked: false
    }

    incrementMe = () => {
        const newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }

    likeMe = () => {
        this.setState({
          liked: true
        })
    }

    render() {
      const likedOrNot = (this.state.liked) ? "Liked" : "Please like me";

      return (
        <div >
            <button 
            className="likeMe" 
            onClick={this.incrementMe}
            >
              {this.state.count} Likes
            </button>
            <button
            className="likeMe" 
            onClick={this.likeMe}
            >
              {likedOrNot}
            </button>
        </div>
      );
    }
  }

  
export default LikeButton;