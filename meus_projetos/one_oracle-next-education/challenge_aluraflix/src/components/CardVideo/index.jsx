/* eslint-disable react/prop-types */
import { useVideosContext } from "../../context/Videos";
import { Button } from "../Button";
import styles from "./CardVideo.module.css";

export const CardVideo = ({ video }) => {
  const { removeVideo, setIsModalOpen, setVideoToEdit } = useVideosContext();

  const handleRemove = () => {
    alert(`Video ${video.title} removido com sucesso`);
    removeVideo(video.id);
  };

  const handleEdit = (vid) => {
    setVideoToEdit(vid);
    setIsModalOpen(true);
  };

  return (
    <section className={styles.container}>
      <iframe
        width="100%"
        height="100%"
        src={video.link}
        title={video.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className={styles.button}>
        <Button icon="edit" handleEdit={() => handleEdit(video)}>
          Editar
        </Button>
        <Button icon="trash" handleRemove={handleRemove}>
          Excluir
        </Button>
      </div>
    </section>
  );
};
