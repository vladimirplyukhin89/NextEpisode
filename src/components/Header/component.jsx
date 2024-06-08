import { ThemeToggler } from "../ThemeToggler/component.jsx";
import { AuthorizationButton } from "../AuthorizationButton/component.jsx";

export const Header = () => {
    
    return (
        <header style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '10px',
        }}>
            <ThemeToggler />
            <AuthorizationButton />
        </header>
    )
}

