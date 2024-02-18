import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
import About from "@/components/about/about";
import Title from "@/components/title/title";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Awards from "@/components/awards/awards";
import Projects from "@/components/projects/projects";

export default function Home() {
	return (
		<div className={styles.main} id="home">
			<Navbar />
			<Title />
			<About />
			<Experience />
			<Projects />
			<Awards />	
			<Contact />
		</div>
	);
}
