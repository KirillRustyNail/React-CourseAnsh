import { createContext, useContext, useState, useCallback } from "react";

export const ThemeContext = createContext({ theme: "light", setTheme: () => {} });

export const ThemeContextProvider = ({
  children,
  initialTheme = "light",
}) => {
  const [theme, setTheme] = useState(initialTheme);

  const setLight = useCallback(() => setTheme("light"), [setTheme]);

  const setDark = useCallback(() => setTheme("dark"), [setTheme]);

  return (
    <ThemeContext.Provider  value={{ theme, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
