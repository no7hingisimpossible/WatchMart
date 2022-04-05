import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, rating, desc } = (props.item);


    return (
        <div className='card'>
            <div className='review-card'>
                <img src={img} alt="" className='profile-pic' />
                <div className='info'>
                    <h4>{name}</h4>
                    <p>rating: {rating}</p>
                    {/* <p><small>rating: {rating}</small></p> */}
                </div>
            </div>
            <p className='description'>{desc}</p>
        </div>
    );
};

export default Review;