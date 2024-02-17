import styles from "./about.module.css";
export default function About() {
	return (
		<div id="about" className={styles["about-container"]}>
			<div className={styles["content-container"]}>
				<h2 className={styles["content-title"]}>About</h2>
				<p className={styles["content-text"]}>
					🌟 Making the world a better place, one crazy challenge at a
					time! 💰 Giving away millions & spreading positivity! 🚀
					Join the #BeastArmy and let's change lives together! 🎥
					YouTube's favorite philanthropist & content creator!
					#TeamTrees 🌳 #TeamSeas 🌊
				</p>
			</div>
			<div
				className={styles["content-container"]}
				id={styles["education"]}
			>
				<h2 id="education" className={styles["content-title"]}>
					Education
				</h2>
				<h3 className={styles["content-subtitle"]}>
					University of Youtube
				</h3>
				<p className={styles["content-text"]}>
					Youtube Video Production
				</p>
				<h3 className={styles["content-subtitle"]}>
					University of the Internet
				</h3>
				<p className={styles["content-text"]}>
					Youtube Video Production
				</p>
			</div>
			<div className={styles["content-container"]} id="skills">
				<h2 className={styles["content-title"]}>Skills</h2>
				<ul className={styles["skills-list"]}>
					<li className={styles["skills-item"]}>Video Production</li>
					<li className={styles["skills-item"]}>Spending Money</li>
					<li className={styles["skills-item"]}>Business Planning</li>
					<li className={styles["skills-item"]}>
						Acting in front of a Camera
					</li>
					<li className={styles["skills-item"]}>
						Youtube Search Optimization
					</li>
					<li className={styles["skills-item"]}>Leadership</li>
				</ul>
			</div>
		</div>
	);
}
