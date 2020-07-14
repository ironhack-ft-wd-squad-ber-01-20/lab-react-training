import React from 'react'

export default function Rating(props) {
    const roundedRating = Math.round(props.rating);
    let rating = ''
    if (roundedRating === 0) rating += '☆☆☆☆☆';
    if (roundedRating === 1) rating += '★☆☆☆☆';
    if (roundedRating === 2) rating += '★★☆☆☆';
    if (roundedRating === 3) rating += '★★★☆☆';
    if (roundedRating === 4) rating += '★★★★☆';
    if (roundedRating === 5) rating += '★★★★★';
    return (
        <div>
            {rating}
        </div>
    )
}
