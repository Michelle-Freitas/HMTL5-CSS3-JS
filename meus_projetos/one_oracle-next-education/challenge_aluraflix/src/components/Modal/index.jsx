import { useEffect, useState } from "react";
import { Input } from "../Input";
import styles from "./Modal.module.css";
import { useVideosContext } from "../../context/Videos";

export const Modal = ({
  handleClose,
  isModalOpen,
  setIsModalOpen,
  videoToEdit,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState();
  const [updatedLink, setUpdatedLink] = useState();
  const [updatedImage, setUpdatedImage] = useState();
  const [updatedCategory, setUpdatedCategory] = useState();

  const { updateVideo } = useVideosContext();

  useEffect(() => {
    setUpdatedTitle(videoToEdit.title);
    setUpdatedLink(videoToEdit.link);
    setUpdatedImage(videoToEdit.img);
    setUpdatedCategory(videoToEdit.category);
  }, [
    videoToEdit.title,
    videoToEdit.link,
    videoToEdit.img,
    videoToEdit.category,
  ]);

  const handleUpdateVideo = () => {
    const videoToUpdate = {
      title: updatedTitle,
      link: updatedLink,
      img: updatedImage,
      category: updatedCategory,
    };
    updateVideo(videoToEdit.id, videoToUpdate);
    setIsModalOpen(false);
  };

  return (
    isModalOpen &&
    videoToEdit && (
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <dialog open onClose={handleClose} className={styles.modal}>
          <h2>Editar Vídeo</h2>
          <button onClick={handleClose} className={styles.closeBtn}>
            X
          </button>
          <form action="" className={styles.form}>
            <Input
              type="text"
              placeholder="insira o título do vídeo"
              name="Titulo"
              label="title"
              value={updatedTitle}
              handleChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="insira a url da imagem"
              name="Imagem"
              label="image"
              value={updatedImage}
              handleChange={(e) => setUpdatedImage(e.target.value)}
            />
            <Input
              type="text"
              placeholder="insira o link do vídeo"
              name="Vídeo"
              label="video"
              value={updatedLink}
              handleChange={(e) => setUpdatedLink(e.target.value)}
            />
            <label htmlFor="category">Escolha uma categoria:</label>
            <select
              name="category"
              id="category"
              value={updatedCategory}
              onChange={(e) => setUpdatedCategory(e.target.value)}
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="mobile">Mobile</option>
            </select>
          </form>
          <input
            type="submit"
            value="Atualizar vídeo"
            className={styles.submitBtn}
            onClick={handleUpdateVideo}
          />
        </dialog>
      </div>
    )
  );
};
