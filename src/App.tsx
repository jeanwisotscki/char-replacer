import React from "react";

import { Forms } from "./components/Forms";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

import { ThemeContext, ThemeContextType } from "./contexts/ThemeContext";

import styles from "./index.module.css";

function App() {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;

  console.log(
    "Desenvolvido por Jean Wisotscki \nLINKEDIN: https://www.linkedin.com/in/jean-wisotscki/"
  );

  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      <Header />
      <Container>
        <h2>Substitua um ou mais caracteres por outros</h2>
        <h3>Como usar?</h3>
        <p>
          Adicione o caractere ou a sequência de caracteres a serem substituídos
          no campo <strong>"Entrada"</strong>, em seguida adicione os que irão
          substitui-los no campo <strong>"Saída"</strong>. Feito! Agora basta
          digitar o seu texto no campo <strong>"Texto de entrada"</strong> e o
          resultado será apresentado em tempo real no campo{" "}
          <strong>"Texto de saída"</strong>.
        </p>
        <Forms />
      </Container>
    </div>
  );
}

export default App;
