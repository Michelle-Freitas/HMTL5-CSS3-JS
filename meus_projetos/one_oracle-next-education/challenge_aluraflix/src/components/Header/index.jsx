import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
      <nav>
        <Link to="/" className={styles.link}>
          Vídeos
        </Link>
        <Link to="/newvideo" className={styles.link}>
          Cadastrar Novo
        </Link>
      </nav>
    </header>
  );
};
