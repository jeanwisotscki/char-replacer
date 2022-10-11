import React from "react";

import styles from "./index.module.css";

export const Forms = () => {
  const [enterText, setEnterText] = React.useState("");
  const [inputChars, setInputChars] = React.useState("");
  const [outputChars, setOutputChars] = React.useState("");

  return (
    <div>
      <h2>Troque caracteres por outros</h2>
      <form className={styles.form}>
        <div className={styles.inputFields}>
          <div>
            <label htmlFor="entrada">Entrada</label>
            <input
              type="text"
              id="entrada"
              onChange={(e) => setInputChars(e.target.value)}
              value={inputChars}
            />
          </div>
          <div>
            <label htmlFor="saida">Saída</label>
            <input
              type="text"
              id="saida"
              onChange={(e) => setOutputChars(e.target.value)}
              value={outputChars}
            />
          </div>
        </div>
      </form>
      <div className={styles.container}>
        <div>
          <label htmlFor="">texto de entrada</label>
          <textarea
            value={enterText}
            onChange={(e) => setEnterText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">texto de saída</label>
          <textarea
            value={enterText.split(inputChars).join(outputChars)}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
