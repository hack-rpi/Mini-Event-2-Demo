import styles from "./projects.module.css";
import {videos} from './videos.ts';

export default function Projects() {
	const listItems = videos.map(video =>
        <div key={video.id} className={styles["video"]}>
            <a href={video.url} target="_blank">
                <img
                src={video.image_url}
                alt={video.name}
                className={styles["video-thumbnail"]}
                />
                <h3>{video.name}</h3>
                <p>
                {video.description}
                </p>
            </a>
        </div>   
        );
    return <div className={`${styles.videoContainer}`}>{listItems}</div>;
}
