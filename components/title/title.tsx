import styles from "./title.module.css";
export default function Title() {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.leftContainer}>
        <img className={styles.titleImg} src="mrbeast.svg" alt="Mr.Beast" />
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>Mr Beast</h1>
        <p className={styles.subtitle}>400 million subscribers</p>
        <a className="button" target="_blank" href="https://www.youtube.com/@MrBeast">Check it out<span className="chevron">»</span></a>
      </div>
    </div>
  );
}
