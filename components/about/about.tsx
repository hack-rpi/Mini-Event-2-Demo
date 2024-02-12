import styles from "./about.module.css";
export default function About() {
  return (
    <div className={styles.aboutContainer} id="about">
      <h1 className={styles.aboutTitle}>About Mr. Beast</h1>
      <p className={styles.aboutText}>
        Mr. Beast is a company that specializes in creating events for the
        community. We are dedicated to creating events that are fun, engaging,
        and educational. We believe that everyone should have the opportunity to
        learn and grow. Our events are designed to help people connect, learn,
        and have fun.
      </p>
      <p className={styles.topVideosLabel}>This year's top videos </p>
      <ul className={styles.topVideos}>
        <li>1. Giving $100,000 To A Homeless Person</li>
        <li>2. I Spent 24 Hours Straight In Insane Asylum</li>
        <li>3. I Gave $500,000 To Random People</li>
      </ul>
    </div>
  );
}
