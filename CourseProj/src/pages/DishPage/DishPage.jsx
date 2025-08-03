import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { useTheme } from "../../components/ThemeContextProvider/useTheme";
import { useUser } from "../../components/UserContextProvider/useUser";
import { Ingredients } from "../../components/Ingredients/Ingredients";
import { DishCounter } from "../../components/Counter/DishCounter";
import { FOOD_EMOJIS } from "../../constants/foodIcons";
import classNames from "classnames";
import styles from "./DishPage.module.css";

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { userName } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();

  if (!dish) return <div>Блюдо не найдено</div>;

  const emojiIndex =
    Math.abs(
      dish.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
    ) % FOOD_EMOJIS.length;
  const foodEmoji = FOOD_EMOJIS[emojiIndex];
    
  return (
    <div
      className={classNames(styles.dishPage, {
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
    >
      <div className={styles.dishContent}>
        <div className={styles.emojiBlock}>
          <span className={styles.itemEmojiLarge}>{foodEmoji}</span>
        </div>
        <div className={styles.infoBlock}>
          <h2 className={styles.dishName}>{dish.name}</h2>
          <p className={styles.dishPrice}>Цена: ${dish.price}</p>
          <Ingredients items={dish.ingredients} />
          {userName && (
            <div className={styles.counterBlock}>
              <DishCounter dishId={dish.id} min={0} max={5} />
            </div>
          )}

          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Go back to the restaurant
          </button>
        </div>
      </div>
    </div>
  );
};
