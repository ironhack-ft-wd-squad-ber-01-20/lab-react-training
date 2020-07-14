import React from "react";

const Rating = (props) => {
  let rating;
  if (props.children === 0) return (rating = <p>☆☆☆☆☆</p>);
  if (props.children < 2.5) return (rating = <p>★★☆☆☆</p>);
  if (props.children < 3.5) return (rating = <p>★★★☆☆</p>);
  if (props.children < 4.5) return (rating = <p>★★★★☆</p>);
  if (props.children <= 5) return (rating = <p>★★★★★</p>);

  return { rating };
};

export default Rating;
