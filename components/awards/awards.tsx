import styles from "./awards.module.css";

export default function Awards() {
	return (
		<div id="awards" className={styles["awards-container"]}>
			<h2 className="white">Awards</h2>
			<div className={styles["content-container"]}>
				<h3 className={styles["awards-subtitle"]}>
					Forbes 30 Under 30
				</h3>
				<p className={styles["awards-text"]}>
					Forbes 30 Under 30 is a set of lists issued annually by
					Forbes magazine and some of its regional editions. The
					American lists recognize 600 business and industry figures,
					with 30 selected in twenty industries each. Asia and Europe
					also have ten categories each.
				</p>
			</div>
			<div className={styles["middle-child"]}>
				<h3 className={styles["awards-subtitle"]}>Shorty Awards</h3>
				<p className={styles["awards-text"]}>
					The Shorty Awards, also known as the "Shortys", is an annual
					awards show recognizing the people and organizations that
					produce real-time short form content across Twitter,
					Facebook, YouTube, Instagram, TikTok, and the rest of the
					social web.
				</p>
			</div>
			<div className={styles["content-container"]}>
				<h3 className={styles["awards-subtitle"]}>Streamy Awards</h3>
				<p className={styles["awards-text"]}>
					The Streamy Awards, often referred to as the Streamys, is an
					annual event that celebrates excellence in online video
					content creation and the individuals and teams behind it.
				</p>
			</div>
		</div>
	);
}
