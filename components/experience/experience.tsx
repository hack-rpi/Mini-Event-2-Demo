import styles from "./experience.module.css";

export default function Experience() {
	return (
		<div id="experience" className={styles["experience-container"]}>
			<div className={styles["content-container"]}>
				<h2 className={styles["experience-title"]}>Experience</h2>
				<a
					href="https://youtube.com/@mrbeast"
					target="_blank"
					rel="noreferrer"
					className={styles["experience-subtitle"]}
				>
					<h3>Youtube Channel with total 400 million subscribers.</h3>
				</a>
				<a
					href="https://time.com/collection/time100-leadership-series/6693255/mrbeast-interview/"
					target="_blank"
					rel="noreferrer"
					className={styles["experience-subtitle"]}
				>
					<h3>Head of a $700 million per year business.</h3>
				</a>
			</div>
		</div>
	);
}
