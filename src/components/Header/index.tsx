import React from "react";
import { ToggleTheme } from "../ToggleTheme";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <div>
        <ToggleTheme />
      </div>
    </header>
  );
};
