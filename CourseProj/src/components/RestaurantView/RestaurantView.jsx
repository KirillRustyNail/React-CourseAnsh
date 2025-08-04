import styles from "./RestaurantView.module.css";
import classNames from "classnames";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { NavLink, Outlet } from "react-router";

export const RestaurantView = ({ id }) => {
  const { theme } = useTheme();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) return <div>Нет информации о ресторане</div>;

  return (
    <div
      className={classNames(styles.restaurantView, {
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
    >
      <h2>{restaurant.name}</h2>

      <div className={styles.tabs}>
        <NavLink
          to={`/restaurants/${id}/menu`}
          className={({ isActive }) =>
            classNames(styles.tab, {
              [styles.active]: isActive,
              [styles.dark]: theme === "dark",
            })
          }
        >
          Меню
        </NavLink>
        <NavLink
          to={`/restaurants/${id}/reviews`}
          className={({ isActive }) =>
            classNames(styles.tab, {
              [styles.active]: isActive,
              [styles.dark]: theme === "dark",
            })
          }
        >
          Отзывы
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};
