import {MenuItem} from '../MenuItem/MenuItem';
import {ReviewItem} from '../ReviewItem/ReviewItem';
import {ReviewForm} from '../ReviewForm/ReviewForm'

export const RestaurantView = ({ restaurant }) => {
  if (!restaurant) return <div>No restaurant data available</div>;

  return (
    <div className="restaurant-view">
      <h2>{restaurant.name}</h2>
      
      <section className="menu-section">
        <h3>Menu</h3>
        {restaurant.menu?.length ? (
          <div className="menu-items">
            {restaurant.menu.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p>No menu items available</p>
        )}
      </section>
      
      <section className="reviews-section">
        <h3>Reviews</h3>
        {restaurant.reviews?.length ? (
          <div className="reviews">
            {restaurant.reviews.map(review => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p>No reviews yet</p>
        )}

        <div className="review-form-add"> 
          <ReviewForm/>
        </div>
        
      </section>
    </div>
  );
}
