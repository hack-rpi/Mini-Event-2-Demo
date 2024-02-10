import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main} id="home">
      <Navbar />
    </div>
  );
}
