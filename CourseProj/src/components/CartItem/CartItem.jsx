import { useSelector, useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import classNames from "classnames";
import { selectDishById } from "../../redux/entities/dishes/slice";
import {
  selectAmountByItemId,
  addToCart,
  removeFromCart,
} from "../../redux/entities/cart/slice";
import { Counter } from "../Counter/Counter";
import { useTheme } from "../ThemeContextProvider/useTheme";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const dispatch = useDispatch();
  const { theme } = useTheme();

  if (!dish) return null;

  return (
    <div
      className={classNames(styles.cartItem, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={styles.info}>
        <span className={styles.name}>{dish.name}</span>
        <span className={styles.price}>${dish.price}</span>
      </div>
      <Counter
        value={amount}
        onIncrement={() => dispatch(addToCart(id))}
        onDecrement={() => dispatch(removeFromCart(id))}
        min={0}
        max={5}
      />
    </div>
  );
};
