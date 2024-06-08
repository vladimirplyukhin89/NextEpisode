import { useContext } from "react";
import { ThemeContext } from "./theme.js";

export const useTheme = () => {
    return useContext(ThemeContext)
}
