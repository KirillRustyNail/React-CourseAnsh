import React from 'react';
import { Counter } from './Counter';
import styles from './ReviewCounter.module.css';
import classNames from 'classnames';

const MIN_RATING = 1;
const MAX_RATING = 5;

const StarDisplay = ({ rating }) => {
  return (
    <div className={styles.starDisplay}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={classNames(styles.star, { [styles.filled]: star <= rating })}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export const ReviewCounter = ({ rating, onIncrement, onDecrement }) => {
  return (
    <div className={styles.ratingControls}>
      <Counter
        value={rating}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        min={MIN_RATING}
        max={MAX_RATING}
      />
      <StarDisplay rating={rating} />
    </div>
  );
};
