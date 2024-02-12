import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";
import About from "@/components/about/about";
import Title from "@/components/title/title";

export default function Home() {
  return (
    <div className={styles.main} id="home">
      <Navbar />
      <Title></Title>
      <About></About>
    </div>
  );
}
