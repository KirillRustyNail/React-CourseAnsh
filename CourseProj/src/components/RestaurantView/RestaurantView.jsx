import styles from './RestaurantView.module.css';
import classNames from 'classnames';
import { MenuItem } from '../MenuItem/MenuItem';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const RestaurantView = ({ restaurant }) => {
  if (!restaurant) return <div>No restaurant data available</div>;

  return (
    <div className={classNames(styles.restaurantView)}>
      <h2>{restaurant.name}</h2>

      <section className={classNames(styles.menuSection)}>
        <h3>Menu</h3>
        {restaurant.menu?.length ? (
          <div className={classNames(styles.menuItems)}>
            {restaurant.menu.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p>No menu items available</p>
        )}
      </section>

      <section className={classNames(styles.reviewsSection)}>
        <h3>Reviews</h3>
        {restaurant.reviews?.length ? (
          <div className={classNames(styles.reviews)}>
            {restaurant.reviews.map(review => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p>No reviews yet</p>
        )}

        <div className={classNames(styles.reviewFormAdd)}>
          <ReviewForm />
        </div>
      </section>
    </div>
  );
};
