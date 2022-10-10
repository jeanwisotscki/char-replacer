import React from "react";

import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { ThemeContext, ThemeContextType } from "./contexts/ThemeContext";

import styles from "./index.module.css";
import { ReplaceFields } from "./components/ReplaceFields";
import { TextAreasContainer } from "./components/TextAreasContainer";

function App() {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      <Header />
      <Container>
        <ReplaceFields />
        <TextAreasContainer />
      </Container>
    </div>
  );
}

export default App;
