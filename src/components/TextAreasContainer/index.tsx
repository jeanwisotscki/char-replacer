import React from "react";

import styles from "./index.module.css";

export const TextAreasContainer = () => {
  const [enterText, setEnterText] = React.useState("");

  function textoEntrada(e) {
    setEnterText(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="">texto de entrada</label>
        <textarea onChange={textoEntrada}>{enterText}</textarea>
      </div>
      <div>
        <label htmlFor="">texto de saída</label>
        <textarea value={enterText.replace(/a/gi, "b")} readOnly />
      </div>
    </div>
  );
};
