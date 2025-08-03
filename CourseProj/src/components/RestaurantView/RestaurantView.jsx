import styles from "./RestaurantView.module.css";
import classNames from "classnames";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useLocation} from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const RestaurantView = ({ id }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return <div>No restaurant data available</div>;

  const isMenu = location.pathname.endsWith("/menu");
  const isReviews = location.pathname.endsWith("/reviews");

  return (
    <div
      className={classNames(styles.restaurantView, {
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
    >
      <h2>{restaurant.name}</h2>

      <div className={styles.tabs}>
        <button
          onClick={() => navigate(`/restaurants/${id}/menu`)}
          className={classNames(
            styles.tab,
            { [styles.dark]: theme === "dark" },
            { [styles.active]: isMenu },
            { [styles["active dark"]]: isMenu && theme === "dark" }
          )}
        >
          Menu
        </button>
        <button
          onClick={() => navigate(`/restaurants/${id}/reviews`)}
          className={classNames(
            styles.tab,
            { [styles.dark]: theme === "dark" },
            { [styles.active]: isReviews },
            { [styles["active dark"]]: isReviews && theme === "dark" }
          )}
        >
          Reviews
        </button>
      </div>
      <Outlet />
    </div>
  );
};
