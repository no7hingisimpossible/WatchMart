import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css'

const Reviews = (props) => {
    const [reviews] = useReviews()
    

    return (
        <div className='container'>
            <h2 className='section-title'>What Our Customers Say!</h2>
            <div className='reviews-container'>
            
            {
                reviews.map(item => 
                    <div key={item.id} className='card'>
                    <div className='review-card'>
                    <img src={item.img} alt="" className='profile-pic'/>
                    <div className='info'>
                    <h4>{item.name}</h4>
                    <p> rating : {item.rating}</p>
                    {/* <p><small>rating: {rating}</small></p> */}
                    </div>
                    </div>
                    <p className='description'>{item.desc}</p>
                </div> 
                
                )
            } 
            
        </div>
        </div>
    );
};

export default Reviews;