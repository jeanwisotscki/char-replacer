import React from "react";

import { ThemeContext, ThemeContextType } from "../../contexts/ThemeContext";

export const ToggleTheme = () => {
  const { theme, setTheme } = React.useContext(
    ThemeContext
  ) as ThemeContextType;

  function handleToggleTheme() {
    if (theme === "light") return setTheme("dark");
    setTheme("light");
  }

  return <button onClick={handleToggleTheme}>Tema atual: {theme}</button>;
};
