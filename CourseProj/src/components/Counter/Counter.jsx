import React from 'react';
import styles from './Counter.module.css';
import classNames from 'classnames';

export const Counter = ({ value, onIncrement, onDecrement, min, max }) => {
  return (
    <div className={styles.counter}>
      <button
        onClick={onDecrement}
        disabled={value === min}
        aria-label="Decrease"
        className={classNames({ [styles.disabled]: value === min })}
      >
        -
      </button>

      <span className={styles['counter-value']}>{value}</span>

      <button
        onClick={onIncrement}
        disabled={value === max}
        aria-label="Increase"
        className={classNames({ [styles.disabled]: value === max })}
      >
        +
      </button>
    </div>
  );
};
