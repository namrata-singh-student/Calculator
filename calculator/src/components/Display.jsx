import styles from "./Display.module.css";
const Display = ({ displayVal }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayVal}
      readOnly
    ></input>
  );
};
export default Display;
