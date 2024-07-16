/* eslint-disable no-unused-vars */
import styles from "./Videos.module.css";
import { VideosList } from "../../components/VideosList";
import { useVideosContext } from "../../context/Videos";
import { Modal } from "../../components/Modal";

export const Videos = () => {
  const {
    frontend,
    backend,
    mobile,
    isModalOpen,
    setIsModalOpen,
    videoToEdit,
  } = useVideosContext();

  return (
    <div className={styles.container}>
      <p>Confira os Vídeos abaixo:</p>
      <VideosList title="Frontend" videos={frontend} typeTitle="frontend" />
      <VideosList title="Backend" videos={backend} typeTitle="backend" />
      <VideosList title="Mobile" videos={mobile} typeTitle="mobile" />
      <Modal
        handleClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        videoToEdit={videoToEdit}
      />
    </div>
  );
};
