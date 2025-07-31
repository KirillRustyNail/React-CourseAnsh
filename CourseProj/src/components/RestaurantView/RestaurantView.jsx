import styles from "./RestaurantView.module.css";
import classNames from "classnames";
import { MenuItem } from "../MenuItem/MenuItem";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useUser } from "../UserContextProvider/useUser";
import { useSelector } from "react-redux";

import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const RestaurantView = ({ id }) => {
  const { theme } = useTheme();
  const { userName } = useUser();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return <div>No restaurant data available</div>;

  const dishIds = restaurant.menu || [];
  const reviewIds = restaurant.reviews || [];

  return (
    <div
      className={classNames(styles.restaurantView, {
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
    >
      <h2>{restaurant.name}</h2>

      <section className={styles.menuSection}>
        <h3>Menu</h3>
        {dishIds.length ? (
          <div className={styles.menuItems}>
            {dishIds.map((dishId) => (
              <MenuItem key={dishId} id={dishId} />
            ))}
          </div>
        ) : (
          <p>No menu items available</p>
        )}
      </section>

      <section className={styles.reviewsSection}>
        <h3>Reviews</h3>
        {reviewIds.length ? (
          <div className={styles.reviews}>
            {reviewIds.map((reviewId) => (
              <ReviewItem key={reviewId} reviewId={reviewId} />
            ))}
          </div>
        ) : (
          <p>No reviews yet</p>
        )}

        {userName && (
          <div className={styles.reviewFormAdd}>
            <ReviewForm restaurantId={restaurant.id} />
          </div>
        )}
      </section>
    </div>
  );
};
