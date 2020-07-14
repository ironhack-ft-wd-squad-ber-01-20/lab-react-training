import React, { useState } from 'react';
import './style.css';

//hook practice
function LikeBtns() {
    const [count, incrementMe] = useState(0);
    const [liked, likeMe] = useState(false);

    const likedOrNot = (liked) ? "Liked" : "Please like me";

      return (
        <div >
            <button 
            className="likeMe" 
            onClick={() => incrementMe(count + 1)}
            >
              {count} Likes
            </button>
            <button
            className="likeMe" 
            onClick={() => likeMe(true)}
            >
              {likedOrNot}
            </button>
        </div>
      );
    }
  

  
export default LikeBtns;