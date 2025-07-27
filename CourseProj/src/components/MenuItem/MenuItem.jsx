import styles from "./MenuItem.module.css";
import classNames from "classnames";
import { Ingredients } from "../Ingredients/Ingredients";
import { DishCounter } from "../Counter/DishCounter";
import { FOOD_EMOJIS } from "../../constants/foodIcons";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useUser } from "../UserContextProvider/useUser";

export const MenuItem = ({ item }) => {
  const { userName } = useUser();
  const { theme } = useTheme();  
  const emojiIndex =
    Math.abs(
      item.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
    ) % FOOD_EMOJIS.length;
  const foodEmoji = FOOD_EMOJIS[emojiIndex];

  return (
    <div
      className={classNames(styles.menuItem, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={classNames(styles.itemEmoji)}>{foodEmoji}</div>
      <div className={classNames(styles.itemInfo)}>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <Ingredients items={item.ingredients} />
      </div>
      {userName && <DishCounter initialCount={0} min={0} max={5} />}
    </div>
  );
};
