import React, { Component } from 'react'

export default class Rating extends Component {
    render() {
        const roundedRating = Math.round(this.props.rating);
        let rating = ''
            if (roundedRating === 0) rating = '☆☆☆☆☆';
            if (roundedRating === 1) rating = '★☆☆☆☆';
            if (roundedRating === 2) rating = '★★☆☆☆';
            if (roundedRating === 3) rating = '★★★☆☆';
            if (roundedRating === 4) rating = '★★★★☆';
            if (roundedRating === 5) rating = '★★★★★';
        return (
            <div className="Rating">
                {rating}
            </div>
        )
    }
}