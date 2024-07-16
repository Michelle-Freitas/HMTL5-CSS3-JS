import styles from "./Title.module.css";

export const Title = ({ typeTitle, children }) => {
  let bgColor = "";
  if (typeTitle === "frontend") bgColor = "#6bd1ff";
  else if (typeTitle === "backend") bgColor = "#00c86f";
  else bgColor = "#6c6ee4";

  return (
    <div style={{ backgroundColor: `${bgColor}` }} className={styles.title}>
      <h2>{children}</h2>
    </div>
  );
};
