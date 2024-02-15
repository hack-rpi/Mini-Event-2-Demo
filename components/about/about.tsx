import styles from "./about.module.css";
export default function About() {
  return (
    <div className={styles.aboutContainer} id="about">
      <h1 className={styles["aboutTitle"]}>About</h1>
      <p className={styles["aboutText"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
