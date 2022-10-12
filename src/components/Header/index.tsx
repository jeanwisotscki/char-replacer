import { ToggleTheme } from "../ToggleTheme";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <strong>CHAR_Replacer</strong>
      <div>
        <ToggleTheme />
      </div>
    </header>
  );
};
