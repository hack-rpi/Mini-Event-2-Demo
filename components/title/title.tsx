import styles from "./title.module.css"
export default function Title(){
    return(
        <div className= {styles.Title}>
            <div className= {styles.TitleLeft}> 
                <img className= "TitleLeftImg "src="hackrpiLogo.png" alt="HackRPI Logo"/> 
            </div>

            <div className= {styles.TitleRight}> 
            </div>
    
        </div>
    )
}

