import { useReducer } from "react";
import { ReviewCounter } from "../Counter/ReviewCounter";

const initialState = {
  name: "",
  text: "",
  rating: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
}

export const ReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleRatingIncrement = () => {
    if (state.rating < 5) {
      dispatch({
        type: "SET_FIELD",
        field: "rating",
        value: state.rating + 1,
      });
    }
  };

  const handleRatingDecrement = () => {
    if (state.rating > 1) {
      dispatch({
        type: "SET_FIELD",
        field: "rating",
        value: state.rating - 1,
      });
    }
  };

  const handleClear = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="review-form">
      <h2>Leave a review</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Rating:</label>
        <ReviewCounter
          rating={state.rating}
          onIncrement={handleRatingIncrement}
          onDecrement={handleRatingDecrement}
        />
      </div>

      <div className="form-group">
        <label htmlFor="text">Review:</label>
        <textarea
          id="text"
          name="text"
          value={state.text}
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
