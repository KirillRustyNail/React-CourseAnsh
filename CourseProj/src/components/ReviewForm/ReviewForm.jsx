import { ReviewCounter } from "../Counter/ReviewCounter";
import { useReviewForm } from "./useReviewForm";

export const ReviewForm = () => {
  const {
    formState,
    handleChange,
    handleRatingIncrement,
    handleRatingDecrement,
    handleClear,
  } = useReviewForm();

  return (
    <div className="review-form">
      <h2>Leave a review</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Rating:</label>
        <ReviewCounter
          rating={formState.rating}
          onIncrement={handleRatingIncrement}
          onDecrement={handleRatingDecrement}
        />
      </div>

      <div className="form-group">
        <label htmlFor="text">Review:</label>
        <textarea
          id="text"
          name="text"
          value={formState.text}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={handleClear} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};