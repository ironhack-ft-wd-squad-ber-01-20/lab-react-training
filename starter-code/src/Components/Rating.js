import React from 'react';

//display same images multiple times
function Rating(props)  {
  const stars = Math.round(props.children);
  
  function ratingStars() {
    const result = [];
    for (let i = 0; i < stars; i ++) {
      result.push(<img class="star" src="../img/iconfinder_full.png" />)
    }
    for (let j = 0; j < 5 - stars; j ++) {
      result.push(<img className="star" src="../img/iconfinder_star.png" />)
    }
    return result;
  }

  return (
    <div>
      {ratingStars(stars)}
    </div>
  )

}


export default Rating;