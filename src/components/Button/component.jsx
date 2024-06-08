import { useTheme } from "../../context/theme/hooks.js";
import { THEMES } from "../../context/theme/constants.js";

export const Button = ({ children, onClick, disabled }) => {
    const { theme } = useTheme();
    
    return <button
        style={{ backgroundColor: theme === THEMES.default ? 'grey' : 'orangered' }}
        onClick={onClick} disabled={disabled}>
        {children}
    </button>
}
