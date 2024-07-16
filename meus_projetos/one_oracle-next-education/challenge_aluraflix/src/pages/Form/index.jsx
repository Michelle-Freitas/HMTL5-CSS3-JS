import { useState } from "react";
import { Input } from "../../components/Input";
import styles from "./Form.module.css";
import { useVideosContext } from "../../context/Videos";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("frontend");

  const { addNewVideo } = useVideosContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !link || !image) {
      return alert("Preencha todos os campos");
    }
    if (title.length < 10 || link.length < 20 || image.length < 20) {
      return alert("Preencha os campos com minimo de caracteres");
    }
    const newVideo = { title, link, image, category };
    addNewVideo(newVideo);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <h2>Novo Card de Vídeo</h2>
      <p>Complete o formulário para criar um novo card com vídeo</p>
      <form action="" className={styles.form}>
        <Input
          type="text"
          placeholder="insira o título do vídeo"
          name="Titulo"
          label="title"
          handleChange={(e) => setTitle(e.target.value)}
          min={20}
        />
        <Input
          type="text"
          placeholder="insira a url da imagem"
          name="Imagem"
          label="image"
          handleChange={(e) => setImage(e.target.value)}
        />
        <Input
          type="text"
          placeholder="insira o link do vídeo"
          name="Vídeo"
          label="video"
          handleChange={(e) => setLink(e.target.value)}
          value={link}
        />
        <label htmlFor="category">Escolha uma categoria:</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="mobile">Mobile</option>
        </select>
      </form>
      <input
        type="submit"
        value="Cadastrar vídeo"
        className={styles.submitBtn}
        onClick={handleSubmit}
      />
    </div>
  );
};
