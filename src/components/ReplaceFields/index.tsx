import React from "react";

import styles from "./index.module.css";

export const ReplaceFields = () => {
  return (
    <form className={styles.form}>
      <h2>Troque caracteres por outros</h2>

      <div className={styles.inputFields}>
        <div>
          <label htmlFor="">Entrada</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Saída</label>
          <input type="text" />
        </div>
      </div>
    </form>
  );
};
