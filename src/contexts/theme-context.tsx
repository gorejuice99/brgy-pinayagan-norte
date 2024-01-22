import { createContext, useContext, useState } from "react";

// Types
import { TProviderProps, ETheme } from "types/common";
import { TTheme, IThemeContext } from "types/theme-context";

const { LIGHT, DARK } = ETheme;

const defaultValue = {
  theme: DARK,
  toggleTheme: (_: TTheme) => {},
} as IThemeContext;

const ThemeContext = createContext(defaultValue);

export function ThemeProvider({ children }: TProviderProps) {
  const [theme, setTheme] = useState<TTheme>(LIGHT);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
