import useReviews from '../../hooks/useReviews'
import './Home.css'
import Watch from '../../Watch.jpg'
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [reviews] = useReviews();
  const navigate = useNavigate()

  const ReviewHandler = () => {
    navigate('/reviews')
  }




  return (
    <div className='container'>
      <div className='brand'>
        <h1 className='brand-name'>Watch Mart</h1>
      </div>
      <div className='home-container'>
        <div className='text-container'>
          <div className='text'>
            <div>
              <h1>WatchMart is the world's leading Watch House.</h1>
              <p>We’re more than connoisseurs - we're collectors too. We would never tell you to buy a watch we wouldn't buy ourselves first.
              </p>
            </div>
          </div>
        </div>
        <div className='product-container'>
          <img src={Watch} alt="" />
        </div>
      </div>
      <h1 className='title'>Watch Our Reviews ({reviews.slice(0, 3).length})</h1>
      <div className='card-container'>


        {/* {reviews.filter(item => item.rating === 5).map(items => (
          <Review key={items.id} item={items} ></Review>
        ))}  */}

        {
          reviews.slice(0, 3).map(item => <Review key={item.id} item={item}></Review>)
        }


      </div>

      <button onClick={ReviewHandler} className='btn'>See All Reviews</button>
    </div>
  );
};

export default Home;