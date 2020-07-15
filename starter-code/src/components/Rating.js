import React from 'react'; 

function Rating(props) {
    let rating=""; 
    for (let i=1; i<=5; i++) {
        if (i<=Math.round(props.children)) {
          rating +="★";   
        } else {
        rating += "☆";
    }
}
    return (
        <div>
            {rating}
        </div>
    )
}





export default Rating; 