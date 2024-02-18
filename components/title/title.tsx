import styles from "./title.module.css";
export default function Title() {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.leftContainer}>
        <img className={styles.titleImg} src="mrbeast.svg" alt="Mr.Beast" />
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>Mr Beast</h1>
        <p className={styles.subtitle}>X Super Official CEO</p>
      </div>
    </div>
  );
}
