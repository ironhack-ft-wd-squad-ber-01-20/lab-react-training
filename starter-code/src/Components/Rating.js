import React from 'react';


 class Rating extends React.Component {
  
  render() {
    const stars = Math.round(this.props.children)
    
    
    if (stars < 1) {
      return (
      <div>
        <img className="star" src="../img/iconfinder_star.png" />
        <img className="star" src="../img/iconfinder_star.png" />
        <img className="star" src="../img/iconfinder_star.png" />
        <img className="star" src="../img/iconfinder_star.png" />
        <img className="star" src="../img/iconfinder_star.png" />
      </div>
      )
    }

    else if (stars == 1) {
      return (
      <div>
        <img class="star" src="../img/iconfinder_full.png" />
        <img class="star" src="../img/iconfinder_star.png" />
        <img class="star" src="../img/iconfinder_star.png" />
        <img class="star" src="../img/iconfinder_star.png" />
        <img class="star" src="../img/iconfinder_star.png" />
      </div>
      )
    }
    else if (stars == 2) {
        return (
          <div>
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_star.png" />
            <img class="star" src="../img/iconfinder_star.png" />
            <img class="star" src="../img/iconfinder_star.png" />
          </div>
        )
      }
      else if (stars == 3) {
        return (
          <div>
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_star.png" />
            <img class="star" src="../img/iconfinder_star.png" />
          </div>
        )
      }
      else if (stars == 4){
        return (
          <div>
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_star.png" />
          </div>
        )
      }
      else {
        return (
          <div>
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
            <img class="star" src="../img/iconfinder_full.png" />
          </div>
        )
      }


  }
 }


export default Rating;