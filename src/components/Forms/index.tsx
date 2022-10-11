import React from "react";
import toast, { Toaster } from "react-hot-toast";

import styles from "./index.module.css";

export const Forms = () => {
  const [inputChars, setInputChars] = React.useState("");
  const [outputChars, setOutputChars] = React.useState("");
  const [enteredText, setEnteredText] = React.useState("");
  const replacedText = enteredText.split(inputChars).join(outputChars);

  const clearAll = () => {
    setInputChars("");
    setOutputChars("");
    setEnteredText("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Texto copiado com sucesso!");
  };

  return (
    <>
      <Toaster />

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
            value={enteredText}
            onChange={(e) => setEnteredText(e.target.value)}
          />

          <button
            onClick={() => copyToClipboard(enteredText)}
            title="Copiar texto do campo"
          >
            Copiar
          </button>
        </div>

        <div>
          <label>Texto de saída</label>
          <textarea placeholder="aaabaaacaaate" value={replacedText} readOnly />
          <button
            onClick={() => copyToClipboard(replacedText)}
            title="Copiar texto do campo"
          >
            Copiar
          </button>
        </div>
      </section>

      <button onClick={clearAll} title="Limpar todos os campos">
        Limpar tudo
      </button>
    </>
  );
};
