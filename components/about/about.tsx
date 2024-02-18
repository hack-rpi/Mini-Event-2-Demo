import styles from "./about.module.css";
export default function About() {
	return (
		<div id="about" className={`${styles["about-container"]}`}>
			<div className="container pink flex">
				<div className={styles["image-container"]}>
					<img src="mrbeast2.jpeg" width="400"></img>
				</div>
				<div>
					<h2 className={`${styles["content-title"]} blue`}>About</h2>
					<p>
						🌟 Making the world a better place, one crazy challenge at a
						time! 💰 Giving away millions & spreading positivity! 🚀
						Join the #BeastArmy and let's change lives together! 🎥
						YouTube's favorite philanthropist & content creator!
						#TeamTrees 🌳 #TeamSeas 🌊
					</p>
				</div>
			</div>
			<div className="container blue flex">
				<div>
					<h2 className="white">
						Education
					</h2>
					<h3 className={styles["content-subtitle"]}>
						University of Youtube
					</h3>
					<p className={styles["content-text"]}>
						Youtube Video Production
					</p>
					<h3  className="white">
						University of the Internet
					</h3>
					<p className={styles["content-text"]}>
						Youtube Video Production
					</p>
				</div>
				<div id="skills">
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
		</div>
	);
}
