import { ReactNode } from "react";

export interface ThemeProviderProps {
  children: ReactNode;
}

export type ThemeModes = "dark" | "light" | "inherit";

export type ThemeModeType = {
  mode: ThemeModes;
  setLightMode: (mode: ThemeModes) => void;
  setDarkMode: (mode: ThemeModes) => void;
};
