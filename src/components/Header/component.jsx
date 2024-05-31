import { ThemeContext } from "../../context/theme.js";
import { useContext } from 'react';

export const Header = () => {
    const theme = useContext(ThemeContext);
    console.log(theme.theme);
    
    return (
        <header>
            <button
                type='button'
                onClick={() => {}}
            >Сменить тему</button>
        </header>
    )
}
