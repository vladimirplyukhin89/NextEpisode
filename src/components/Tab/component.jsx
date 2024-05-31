import { useContext } from "react";
import { ThemeContext } from "../../context/theme.js";

export const Tab = ({ title, onClick, isActive }) => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <button
            style={{ backgroundColor: `${theme ? 'yellowgreen' : 'grey'}`}}
            onClick={onClick}
            disabled={isActive}>
            {title}
        </button>
    )
}
