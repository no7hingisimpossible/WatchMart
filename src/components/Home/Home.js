import useReviews from '../../hooks/useReviews'
import './Home.css'
import Watch from '../../Watch.jpg'
import Review from '../Review/Review';
const Home = () => {
  const [reviews, setReviews] = useReviews();
  


  return (
    <div>
      <div className='brand'>
      <h1 className='brand-name'>Watch Mart</h1>
      </div>
      <div className='home-container'>
        <div className='text-container'>
          <div>
          <h1>WatchMart is the world's leading Watch House.</h1>
          <p>We’re more than connoisseurs - we're collectors too. We would never tell you to buy a watch we wouldn't buy ourselves first.
          </p>
          </div>
        </div>
        <div className='product-container'>
          <img src={Watch} alt="" />
        </div>
      </div>
      <h1 className='title'>Watch Our Reviews</h1>
      <div className='card-container'>
        {
          reviews.map(items => <Review key={items.id} items={items}></Review>)
        }
      </div>
    </div>
  );
};

export default Home;