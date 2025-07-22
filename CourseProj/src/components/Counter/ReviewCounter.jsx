import React from 'react';
import { Counter } from './Counter';

const MIN_RATING = 1;
const MAX_RATING = 5;

const StarDisplay = ({ rating }) => {
  return (
    <div
      className="star-display"
      style={{ marginLeft: "10px", fontSize: "24px" }}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            color: star <= rating ? "#ffc107" : "#e4e5e9",
            cursor: "default",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export const ReviewCounter = ({ rating, onIncrement, onDecrement }) => {
  return (
    <div className="rating-controls" style={{ display: 'flex', alignItems: 'center' }}>
      <Counter
        value={rating}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        min={MIN_RATING}
        max={MAX_RATING}
      />
      <StarDisplay rating={rating}/>
    </div>
  );
};