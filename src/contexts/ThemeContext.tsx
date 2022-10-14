import React from "react";

type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    const actualThemeInStorage = localStorage.getItem("@theme");

    if (!actualThemeInStorage) return localStorage.setItem("@theme", "light");

    if (actualThemeInStorage === "light" || actualThemeInStorage === "dark")
      return setTheme(actualThemeInStorage);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
