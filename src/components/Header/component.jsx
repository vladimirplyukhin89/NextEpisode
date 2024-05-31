import { ThemeContext } from "../../context/theme.js";
import { useContext } from 'react';

export const Header = () => {
    const { changeTheme } = useContext(ThemeContext);
    
    return (
        <header>
            <button
                type='button'
                onClick={() => changeTheme()}
            >Сменить тему</button>
        </header>
    )
}
