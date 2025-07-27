import React from 'react';
import { Counter } from './Counter';
import styles from './ReviewCounter.module.css';
import classNames from 'classnames';
import { useTheme } from '../ThemeContextProvider/useTheme';

const MIN_RATING = 1;
const MAX_RATING = 5;

const StarDisplay = ({ rating, theme }) => {
  return (
    <div className={styles.starDisplay}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={classNames(styles.star, {
            [styles.filled]: star <= rating,
            dark: theme === 'dark', 
          })}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export const ReviewCounter = ({ rating, onIncrement, onDecrement }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.ratingControls, {
        dark: theme === 'dark', 
      })}
    >
      <Counter
        value={rating}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        min={MIN_RATING}
        max={MAX_RATING}
      />
      <StarDisplay rating={rating} theme={theme} />
    </div>
  );
};
