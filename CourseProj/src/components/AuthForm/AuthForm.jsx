import { useUser } from "../UserContextProvider/useUser";
import { useCallback } from "react";
import styles from "./AuthForm.module.css";
import classNames from "classnames";

export const AuthForm = () => {
  const { userName, logIn, logOut } = useUser();

  const onClick = useCallback(
    () => (userName ? logOut() : logIn("Man who sold the world")),
    [userName, logIn, logOut]
  );

  return (
    <div className={classNames(styles.container)}>
      {userName && <span className={styles.userName}>{userName}</span>}
      <button onClick={onClick} className={styles.button}>
        {userName ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};
