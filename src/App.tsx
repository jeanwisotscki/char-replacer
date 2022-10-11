import React from "react";

import { Forms } from "./components/Forms";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { ThemeContext, ThemeContextType } from "./contexts/ThemeContext";

import styles from "./index.module.css";

function App() {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      <Header />
      <Container>
        <Forms />
      </Container>
    </div>
  );
}

export default App;
