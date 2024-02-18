import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles["nav-container"]} id="">
      <div className={styles["nav-flex"]}>
        <a href="#home" className={styles["nav-item"]}>
          Home
        </a>
        <a href="#about" className={styles["nav-item"]}>
          About
        </a>
        <a href="#skills" className={styles["nav-item"]}>
          Skills
        </a>
        <a href="#experience" className={styles["nav-item"]}>
          Experience
        </a>
        <a href="#projects" className={styles["nav-item"]}>
          Projects
        </a>
        <a href="#awards" className={styles["nav-item"]}>
          Awards
        </a>
        <a href="#contact" className={styles["nav-item"]}>
          Contact
        </a>
      </div>
    </div>
  );
}
