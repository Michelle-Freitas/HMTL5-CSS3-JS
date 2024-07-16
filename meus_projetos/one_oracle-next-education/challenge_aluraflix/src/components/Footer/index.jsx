import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Challenge desenvolvido por{" "}
        <a href="https://michelle-freitas.vercel.app/" target="_blank">
          Michelle Freitas
        </a>{" "}
        para a formação React do ONE{" "}
        <a
          href="https://www.oracle.com/br/education/oracle-next-education/"
          target="_blank"
        >
          Oracle Next Education
        </a>{" "}
        em parceria com a{" "}
        <a href="https://www.alura.com.br/" target="_blank">
          Alura
        </a>
      </p>
      <p>
        Visite o{" "}
        <a
          href="https://github.com/Michelle-Freitas/HMTL5-CSS3-JS/tree/main/meus_projetos/one_oracle-next-education/challenge_aluraflix"
          target="_blank"
        >
          repositório
        </a>
      </p>
    </footer>
  );
};

export default Footer;
