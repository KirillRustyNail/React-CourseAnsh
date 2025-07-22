import styles from './ReviewForm.module.css';
import classNames from 'classnames';
import { ReviewCounter } from '../Counter/ReviewCounter';
import { useReviewForm } from './useReviewForm';

export const ReviewForm = () => {
  const {
    formState,
    handleChange,
    handleRatingIncrement,
    handleRatingDecrement,
    handleClear,
  } = useReviewForm();

  return (
    <div className={classNames(styles.reviewForm)}>
      <h2>Leave a review</h2>

      <div className={classNames(styles.formGroup)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>

      <div className={classNames(styles.formGroup)}>
        <label>Rating:</label>
        <ReviewCounter
          rating={formState.rating}
          onIncrement={handleRatingIncrement}
          onDecrement={handleRatingDecrement}
        />
      </div>

      <div className={classNames(styles.formGroup)}>
        <label htmlFor="text">Review:</label>
        <textarea
          id="text"
          name="text"
          value={formState.text}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className={classNames(styles.formActions)}>
        <button
          type="button"
          onClick={handleClear}
          className={classNames(styles.clearButton)}
        >
          Clear
        </button>
      </div>
    </div>
  );
};