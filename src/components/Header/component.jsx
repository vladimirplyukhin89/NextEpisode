import { ThemeToggler } from "../ThemeToggler/component.jsx";
import { AuthorizationButton } from "../AuthorizationButton/component.jsx";

import s from './style.module.css'

export const Header = () => {
    
    return (
        <header className={s.root}>
            <ThemeToggler />
            <AuthorizationButton />
        </header>
    )
}

