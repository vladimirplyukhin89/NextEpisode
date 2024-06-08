import { ThemeContext } from "./theme.js";
import { useMemo, useState } from "react";
import { THEMES } from "./constants.js";

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEMES.default);
    
    const contextValue = useMemo(() => ({
            theme,
            toggleTheme: () =>
                setTheme((currentTheme) =>
                    currentTheme === THEMES.default ? THEMES.alternative : THEMES.default
            ),
        }),
  [theme]
    );
    
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
