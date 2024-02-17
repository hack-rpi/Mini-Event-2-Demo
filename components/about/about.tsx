import styles from "./about.module.css";
export default function About() {
  return (
    <div id="about" className={styles["about-container"]}>
      <div className={styles["content-container"]}>
        <h2 className={styles["content-title"]}>About</h2>
        <p className={styles["content-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={styles["content-container"]}>
        <h2 className={styles["content-title"]}>Education</h2>
        <ul className={styles["education-list"]}>
          <li className={styles["education-item"]}>Community College</li>
          <li className={styles["education-item"]}>High School Diploma</li>
        </ul>
      </div>
      <div className={styles["content-container"]}>
        <h2 className={styles["content-title"]}>Skills</h2>
        <ul className={styles["skills-list"]}>
          <li className={styles["skills-item"]}>JavaScript</li>
          <li className={styles["skills-item"]}>Python</li>
          <li className={styles["skills-item"]}>React</li>
          <li className={styles["skills-item"]}>Node.js</li>
          <li className={styles["skills-item"]}>Express</li>
          <li className={styles["skills-item"]}>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}
