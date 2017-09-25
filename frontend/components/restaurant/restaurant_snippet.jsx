import React from 'react';
import { Link } from 'react-router';
import ReactStars from 'react-stars';
import FavoriteBox from '../favorite/favorite_box';

const RestaurantSnippet = ({ restaurant }) => {
  const overallRating = Math.floor(restaurant.ratings.rating/restaurant.ratings.total*2)/2;
  const overallValue = Math.floor(restaurant.ratings.value/restaurant.ratings.total*2)/2;
  const stars = 'stars'

  return (
    <section className='snippet-section'>
      <Link to={`restaurant/${restaurant.id}`} className='snippet-photo'>
        <article className='snippet-img'>
          <img src={restaurant.image}/>
        </article>
      </Link>
      <article className='snippet-info'>
        <h4>
          <Link to={`restaurant/${restaurant.id}`}>
            {restaurant.restaurant_name}
          </Link>
        </h4>
        <article className='no-hover'>
          <ReactStars
            count={5}
            edit={false}
            value={overallRating}
            />
        </article>
        <h4 className="detail-fade">{restaurant.cuisine} | {restaurant.name}, {restaurant.state}</h4>
      </article>
      <article className='snippet-price'>
        <article className='no-hover'>
          <ReactStars
            count={5}
            edit={false}
            value={overallValue}
            char='$'
            />
        </article>
      </article>
      <article className='snippet-review'>
        <FavoriteBox restaurantId={restaurant.id.toString()}/>
        <p>{restaurant.ratings.details}</p>
      </article>
    </section>
  )
}

export default RestaurantSnippet;
