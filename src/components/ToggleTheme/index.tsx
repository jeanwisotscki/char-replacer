import React from "react";

import SunIcon from "../../../public/assets/sun.svg";
import MoonIcon from "../../../public/assets/moon.svg";

import { ThemeContext, ThemeContextType } from "../../contexts/ThemeContext";

export const ToggleTheme = () => {
  const { theme, setTheme } = React.useContext(
    ThemeContext
  ) as ThemeContextType;

  function handleToggleTheme() {
    if (theme === "light") return setTheme("dark");
    setTheme("light");
  }

  return (
    <button
      title="Trocar de tema"
      onClick={handleToggleTheme}
      style={{
        background: "none",
        outline: "none",
        border: "none",
      }}
    >
      <img
        src={theme === "light" ? SunIcon : MoonIcon}
        width={25}
        height={25}
        alt={theme === "light" ? "ícone de sol" : "ícone de lua"}
      />
    </button>
  );
};
