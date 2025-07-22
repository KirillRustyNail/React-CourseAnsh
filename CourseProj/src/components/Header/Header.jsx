import styles from './Header.module.css';
import classNames from 'classnames';

export const Header = () => {
  return (
    <header className={classNames(styles.header)}>
      <h1>Restaurant App</h1>
    </header>
  );
};