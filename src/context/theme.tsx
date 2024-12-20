import { createContext, Dispatch, SetStateAction } from "react";
import { Theme } from "../Global";

type ThemeContextValue = [Theme, Dispatch<SetStateAction<Theme>>];

export const ThemeContext = createContext<ThemeContextValue>([
  "light",
  () => null,
]);

// Export the ThemeProvider for use in components // TODO
export const ThemeProvider = ThemeContext.Provider;