import { Link } from "react-router";
import { ThemeChangeButton } from "../themeChangeButton/themeChangeButton";
import { AuthForm } from "../AuthForm/AuthForm";
import { Cart } from "../Cart/Cart"; 
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.homeButton}>
        💻 Home
      </Link>
      <h1 className={styles.title}>Restaurant App</h1>
      <div className={styles.controls}>
        <Cart />
        <AuthForm />
        <ThemeChangeButton />
      </div>
    </header>
  );
};
