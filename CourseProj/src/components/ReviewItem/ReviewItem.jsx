import styles from "./ReviewItem.module.css";
import classNames from "classnames";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice"; 
import { selectUserById } from "../../redux/entities/users/slice"; 

export const ReviewItem = ({ reviewId }) => {
  const { theme } = useTheme();

  const review = useSelector((state) => selectReviewById(state, reviewId));
  const reviewUser = useSelector((state) => selectUserById(state, review.userId));

  if (!review) {
    return <div>Review not found</div>;
  }

  return (
    <div
      className={classNames(styles.reviewItem, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={classNames(styles.reviewHeader)}>
        <span className={classNames(styles.user)}>{reviewUser.name}</span>
        <span className={classNames(styles.rating)}>
          {"★".repeat(review.rating)}
        </span>
      </div>
      <p className={classNames(styles.reviewText)}>{review.text}</p>
    </div>
  );
};
