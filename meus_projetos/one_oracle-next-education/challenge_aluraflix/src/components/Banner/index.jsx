import styles from "./Banner.module.css";

export const Banner = () => {
  const bannerURL =
    "https://www.alura.com.br/artigos/assets/alura-valores-empresa-escola-tecnologia/alura-valores-empresa-escola-tecnologia.png";

  return (
    <div className={styles.banner}>
      <img src={bannerURL} alt="Banner venha estudar na alura" />
      <div className={styles.text}>
        <h1>AluraFlix</h1>
        <p>
          Aprenda Programação, Front-end, Back-end, Data Science, UX, DevOps,
          Inovação e Gestão na maior plataforma de tecnologia do Brasil
        </p>
      </div>
    </div>
  );
};
