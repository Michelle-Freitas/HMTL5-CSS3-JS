/* eslint-disable react/prop-types */
import styles from "./Input.module.css";

export const Input = ({
  type,
  placeholder,
  name,
  label,
  handleChange,
  value,
  min,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={label}
        id={label}
        onChange={handleChange}
        value={value}
        required
        minLength={min}
      ></input>
    </div>
  );
};
