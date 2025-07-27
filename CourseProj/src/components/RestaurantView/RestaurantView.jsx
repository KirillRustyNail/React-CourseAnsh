import styles from "./RestaurantView.module.css";
import classNames from "classnames";
import { MenuItem } from "../MenuItem/MenuItem";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useUser } from "../UserContextProvider/useUser";

export const RestaurantView = ({ restaurant }) => {
  const { theme } = useTheme();
  const { userName } = useUser();

  if (!restaurant) return <div>No restaurant data available</div>;

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
        {restaurant.menu?.length ? (
          <div className={styles.menuItems}>
            {restaurant.menu.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p>No menu items available</p>
        )}
      </section>

      <section className={styles.reviewsSection}>
        <h3>Reviews</h3>
        {restaurant.reviews?.length ? (
          <div className={styles.reviews}>
            {restaurant.reviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p>No reviews yet</p>
        )}

        {userName && (
          <div className={styles.reviewFormAdd}>
            <ReviewForm />
          </div>
        )}
      </section>
    </div>
  );
};
