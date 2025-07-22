import styles from './Layout.module.css';
import classNames from 'classnames';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <div className={classNames(styles.layout)}>
      <Header />
      <main className={classNames(styles.content)}>{children}</main>
      <Footer />
    </div>
  );
};
