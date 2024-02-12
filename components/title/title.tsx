import styles from "./title.module.css"
export default function Title(){
    return(
        <div className={styles.titleContainer}>
            <div className={styles.leftContainer}>
                <img className={styles.titleImg} src="hackrpiLogo.png" alt="logo" />
            </div>
            <div className={styles.rightContainer}>
                <h1 className={styles.title}>HackRPI</h1>
                <p className={styles.subtitle}>
                RPI's annual hackathon. Join us for 24 hours 
                of fun in the fall.
                </p>
            </div>
        </div>
    )
}

