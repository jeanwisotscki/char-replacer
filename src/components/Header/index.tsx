import React from "react";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <div>theme toggle</div>
    </header>
  );
};
