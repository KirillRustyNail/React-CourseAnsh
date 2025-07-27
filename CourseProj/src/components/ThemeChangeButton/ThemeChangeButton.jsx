import { useTheme } from '../ThemeContextProvider/useTheme';
import styles from './ThemeChangeButton.module.css';
import classNames from 'classnames';

export const ThemeChangeButton = () => {
  const { theme, setLight, setDark } = useTheme();

  return (
    <button
      onClick={() => (theme === 'light' ? setDark() : setLight())}
      className={styles.button}
    >
      {theme === 'light' ? '📀' : '💿'}
    </button>
  );
};
