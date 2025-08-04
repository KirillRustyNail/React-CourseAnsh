import { NavLink } from "react-router";
import classNames from "classnames";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import styles from "./RestaurantTab.module.css";

export const RestaurantTab = ({ id }) => {
  const { theme } = useTheme();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) return null;

  return (
    <NavLink
      to={`/restaurants/${id}`}
      className={({ isActive }) =>
        classNames(styles.tab, {
          [styles.active]: isActive,
          [styles.dark]: theme === "dark",
        })
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
