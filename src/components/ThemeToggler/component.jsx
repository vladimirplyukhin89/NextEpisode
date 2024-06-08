import { useTheme } from "../../context/theme/hooks.js";
import { Button } from "../Button/component.jsx";

export const ThemeToggler = () => {
    const { toggleTheme } = useTheme();
    
    return (
        <Button onClick={toggleTheme}>
            Switch Theme
        </Button>
    )
}
