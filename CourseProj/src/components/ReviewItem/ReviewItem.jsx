import styles from "./ReviewItem.module.css";
import classNames from "classnames";
import { useTheme } from "../ThemeContextProvider/useTheme";

export const ReviewItem = ({ review }) => {
  const { theme } = useTheme();
  return (
    <div
      className={classNames(styles.reviewItem, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={classNames(styles.reviewHeader)}>
        <span className={classNames(styles.user)}>{review.user}</span>
        <span className={classNames(styles.rating)}>
          {"★".repeat(review.rating)}
        </span>
      </div>
      <p className={classNames(styles.reviewText)}>{review.text}</p>
    </div>
  );
};
