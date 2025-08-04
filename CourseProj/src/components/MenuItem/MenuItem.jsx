import { useSelector } from "react-redux";
import styles from "./MenuItem.module.css";
import classNames from "classnames";
import { Ingredients } from "../Ingredients/Ingredients";
import { DishCounter } from "../Counter/DishCounter";
import { FOOD_EMOJIS } from "../../constants/foodIcons";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useUser } from "../UserContextProvider/useUser";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Link } from "react-router";

export const MenuItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { userName } = useUser();
  const { theme } = useTheme();

  if (!dish) return null;

  const emojiIndex =
    Math.abs(
      dish.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
    ) % FOOD_EMOJIS.length;
  const foodEmoji = FOOD_EMOJIS[emojiIndex];

  const handleClick = (e) => {
    if (
      e.target.closest("button") ||
      e.target.closest("input") ||
      e.target.closest("select") ||
      e.target.closest("textarea")
    ) {
      e.preventDefault();
    }
  };

  return (
    <Link
      to={`/dish/${dish.id}`}
      className={classNames(styles.menuItem, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      style={{ textDecoration: "none" }}
      onClick={handleClick}
    >
      <div className={styles.itemEmoji}>{foodEmoji}</div>
      <div className={styles.itemInfo}>
        <h4>{dish.name}</h4>
        <p>Price: ${dish.price}</p>
        <Ingredients items={dish.ingredients} />
      </div>
      {userName && <DishCounter dishId={dish.id} min={0} max={5} />}
    </Link>
  );
};
