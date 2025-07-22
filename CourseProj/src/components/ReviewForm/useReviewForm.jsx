import { useReducer } from "react";

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

export const useReviewForm = () => {
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

  return {
    formState: state,
    handleChange,
    handleRatingIncrement,
    handleRatingDecrement,
    handleClear,
  };
};