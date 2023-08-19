import React from 'react';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={`full-${i}`} src={require('../images/Star-p.png')} alt='Full Star' />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img key={`empty-${i}`} src={require('../images/star-v.png')} alt='Empty Star' />);
  }

  return <div className='star-rating'>{stars}</div>;
}

export default StarRating;
