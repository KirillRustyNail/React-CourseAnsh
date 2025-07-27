import styles from "./Footer.module.css";
import { useTheme } from "../ThemeContextProvider/useTheme";
import classNames from "classnames";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={styles.footer}
    >
      <p>© Restaurant App</p>
    </footer>
  );
};
