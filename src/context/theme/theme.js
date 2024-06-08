import { createContext } from "react";
import { THEMES } from "./constants.js";

export const ThemeContext = createContext(THEMES.default);
