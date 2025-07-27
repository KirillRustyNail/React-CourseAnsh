import { ThemeChangeButton } from "../themeChangeButton/themeChangeButton";
import { AuthForm } from "../AuthForm/AuthForm";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Restaurant App</h1>
      <div className={styles.controls}>
        <AuthForm />
        <ThemeChangeButton />
      </div>
    </header>
  );
};
