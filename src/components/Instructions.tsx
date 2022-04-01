import styles from "./Instructions.module.scss";

export const Instructions = () => {
  return (
    <div className={styles.instructions}>
      <ul className={styles["instructions-list"]}>
        <li>
          <span>1. Teleop device</span>
        </li>
        <li>
          <span>2. Click the three dots in the bottom right corner</span>
        </li>
        <li>
          <span>3. Click open terminal</span>
        </li>
        <li>
          <span>
            4. NOTE: this terminal will be the{" "}
            <span className={styles.terminal}>formant</span> user use
            <span className={styles.terminal}> su - USER</span> to change to
            USER of your choise
          </span>
        </li>
      </ul>
    </div>
  );
};
