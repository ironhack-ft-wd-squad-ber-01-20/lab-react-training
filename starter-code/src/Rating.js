import React from 'react'
import './Rating.css';

const Rating=(props)=>{
    let rate=Math.round(props.children);
    function fullstars(number){
        let array=[];
         array.push("★".repeat(number), "☆".repeat(5-number) )
         return array.join('');
    }
    return(
<div>
   <h1>{fullstars(rate)}</h1>
</div>
    );
};


export default Rating;