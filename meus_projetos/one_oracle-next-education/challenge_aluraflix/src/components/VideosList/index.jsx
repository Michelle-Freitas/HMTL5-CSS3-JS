import { CardVideo } from "../CardVideo";
import { Title } from "../Title";
import styles from "./VideosList.module.css";

export const VideosList = ({ title, typeTitle, videos }) => {
  return (
    <div className={styles.container}>
      <Title typeTitle={typeTitle}>{title}</Title>
      <div className={styles.list}>
        {videos &&
          videos.map((video) => <CardVideo key={video.id} video={video} />)}
      </div>
    </div>
  );
};
