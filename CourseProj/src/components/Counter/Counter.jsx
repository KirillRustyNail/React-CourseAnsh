import styles from './Counter.module.css';
import classNames from 'classnames';

export const Counter = ({ value, onIncrement, onDecrement, min, max }) => {
  return (
    <div className={styles.counter}>
      <button
        onClick={onDecrement}
        disabled={value === min}
        aria-label="Decrease"
        className={classNames(styles.counterButton)}
      >
        -
      </button>

      <span className={styles.counterValue}>{value}</span>

      <button
        onClick={onIncrement}
        disabled={value === max}
        aria-label="Increase"
        className={classNames(styles.counterButton)}
      >
        +
      </button>
    </div>
  );
};
