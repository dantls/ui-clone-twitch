import React, { createContext, useState} from "react";
import { DefaultTheme } from "styled-components";

import {light, dark} from "../styles/themes/themes";

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };