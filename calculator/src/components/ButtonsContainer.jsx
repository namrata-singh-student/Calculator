import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "DE",
    "+",
    "-",

    "7",
    "8",
    "9",
    "/",

    "4",
    "5",
    "6",
    "*",

    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",

    "0",
  ];
  const anotherButtonNames = [".", "="];
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles.button}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        {anotherButtonNames.map((anotherButtonName) => (
          <button
            className={styles.anotherButton}
            onClick={() => onButtonClick(anotherButtonName)}
          >
            {anotherButtonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonsContainer;
