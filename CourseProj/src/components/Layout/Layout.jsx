import styles from './Layout.module.css';
import classNames from 'classnames';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useTheme } from '../ThemeContextProvider/useTheme';

export const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.layout, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
      })}
    >
      <Header />
      <main className={classNames(styles.content)}>{children}</main>
      <Footer />
    </div>
  );
};
