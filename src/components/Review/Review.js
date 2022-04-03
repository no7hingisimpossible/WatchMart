import React from 'react';
import './Review.css'

const Review = ({items}) => {
    return (
        <div className='card'>
            <div className='review-card'>
            <img src={items.img} alt="" className='profile-pic'/>
            <div className='info'>
            <p>{items.name}</p>
            {/* <p><small>rating: {items.rating}</small></p> */}
            </div>
            </div>
            <p className='description'>{items.desc}</p>
        </div>
    );
};

export default Review;