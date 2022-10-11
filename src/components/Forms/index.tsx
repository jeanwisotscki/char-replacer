import React from "react";

import styles from "./index.module.css";

export const Forms = () => {
  const [enterText, setEnterText] = React.useState("");
  const [inputChars, setInputChars] = React.useState("");
  const [outputChars, setOutputChars] = React.useState("");

  const clearAllInputs = () => {
    setEnterText("");
    setInputChars("");
    setOutputChars("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <h2>Troque caracteres por outros</h2>

      <section className={styles.inputFields}>
        <div>
          <label htmlFor="entrada">Entrada</label>
          <input
            type="text"
            id="entrada"
            placeholder="a"
            onChange={(e) => setInputChars(e.target.value)}
            value={inputChars}
          />
        </div>
        <div>
          <label htmlFor="saida">Saída</label>
          <input
            type="text"
            id="saida"
            placeholder="aaa"
            onChange={(e) => setOutputChars(e.target.value)}
            value={outputChars}
          />
        </div>
      </section>

      <section className={styles.textFields}>
        <div>
          <label htmlFor="texto-entrada">Texto de entrada</label>
          <textarea
            id="texto-entrada"
            placeholder="abacate"
            value={enterText}
            onChange={(e) => setEnterText(e.target.value)}
          />
          <button
            onClick={() => copyToClipboard(enterText)}
            title="Copiar texto do campo"
          >
            Copiar
          </button>
        </div>
        <div>
          <label>Texto de saída</label>
          <textarea
            placeholder="aaabaaacaaate"
            value={enterText.split(inputChars).join(outputChars)}
            readOnly
          />
          <button
            onClick={() =>
              copyToClipboard(enterText.split(inputChars).join(outputChars))
            }
            title="Copiar texto do campo"
          >
            Copiar
          </button>
        </div>
      </section>
      <button onClick={clearAllInputs} title="Limpar todos os campos">
        Limpar tudo
      </button>
    </>
  );
};
