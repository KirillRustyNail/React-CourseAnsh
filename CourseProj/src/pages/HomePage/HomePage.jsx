import { useNavigate } from "react-router";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Welcome, netrunner!</h1>
      <div className={styles.cyberText}>
        Hungry in the neon jungle? <br />
        Welcome to the only food app that survived the corporate wars.
        <br />
        Tired of synth-noodles and recycled pizza? <br />
        Our restaurants serve real food (or at least, food-like substances).
        <br />
        Click below to jack in and browse the city’s finest (and least
        radioactive) menus.
        <br />
        <br />
        Disclaimer: We are not responsible for any cyber-viruses, taste
        glitches, or existential dread caused by our dishes.
        <br />
      </div>
      <button
        className={styles.button}
        onClick={() => navigate("/restaurants")}
      >
        Dive into the restaurants
      </button>
    </div>
  );
};
