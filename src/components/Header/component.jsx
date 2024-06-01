import { ThemeContext } from "../../context/theme.js";
import { useContext } from 'react';
import { AuthContext } from "../../context/user.js";

export const Header = () => {
    const { changeTheme } = useContext(ThemeContext);
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    
    return (
        <header style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '10px',
        }}>
            <button
                type='button'
                onClick={changeTheme}
            >Toggle theme</button>
            {
            currentUser?.name?.length
                ?
                <button
                    type='button'
                    onClick={() => setCurrentUser({name: ''})}
                >{`${currentUser.name}, sign out`}</button>
                :
                <button
                    type='button'
                    onClick={() => setCurrentUser({name: 'John Doe'})}
                >Sing in</button>
            }
        
        </header>
    )
}

