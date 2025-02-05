import React, { useContext, createContext, useState } from "react";
import { Theme } from "@radix-ui/themes";
import { ThemeProviderProps, ThemeModes, ThemeModeType } from "./type";

export const ThemeContext = createContext({} as ThemeModeType);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [modeTheme, setModeTheme] = useState<ThemeModes>("inherit");
  const setLightMode = (mode: ThemeModes) => setModeTheme(mode);
  const setDarkMode = (mode: ThemeModes) => setModeTheme(mode);

  return (
    <ThemeContext.Provider
      value={{ mode: modeTheme, setLightMode, setDarkMode }}
    >
      <Theme appearance={modeTheme} accentColor="crimson" radius="large">
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
