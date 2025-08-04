import styles from "./Layout.module.css";
import classNames from "classnames";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { Outlet } from "react-router";


export const Layout = ({}) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.layout, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <Header />
      <main className={styles.content}>{<Outlet />}</main>
      <Footer />
    </div>
  );
};
