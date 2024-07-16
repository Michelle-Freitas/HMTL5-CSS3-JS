import styles from "./Button.module.css";
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

export const Button = ({ icon, children, handleRemove, handleEdit }) => {
  return (
    <button
      className={styles.button}
      onClick={() => (icon === "edit" ? handleEdit() : handleRemove())}
    >
      <span>{icon === "edit" ? <CiEdit /> : <FaTrashAlt />}</span>
      {children}
    </button>
  );
};
