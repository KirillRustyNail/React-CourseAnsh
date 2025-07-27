import { useTheme } from '../ThemeContextProvider/useTheme';
import styles from './Counter.module.css';
import classNames from 'classnames';

export const Counter = ({ value, onIncrement, onDecrement, min, max }) => {
  const { theme } = useTheme();

  return (
    <div className={classNames(styles.counter, {
      [styles.light]: theme === 'light',
      [styles.dark]: theme === 'dark',
    })}>
      <button
        onClick={onDecrement}
        disabled={value === min}
        aria-label="Decrease"
        className={styles.counterButton}
      >
        -
      </button>

      <span className={styles.counterValue}>{value}</span>

      <button
        onClick={onIncrement}
        disabled={value === max}
        aria-label="Increase"
        className={styles.counterButton}
      >
        +
      </button>
    </div>
  );
};
