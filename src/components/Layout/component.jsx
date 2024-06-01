import { Header} from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";
import { ThemeContext } from "../../context/theme.js";
import { useTheme } from "../../hooks/useTheme.jsx";
import { AuthContext } from "../../context/user.js";
import { useState } from "react";

export const Layout = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({ name: '' });
    const { theme, changeTheme  } = useTheme();
    
    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            <ThemeContext.Provider value={{ theme, changeTheme }}>
                <div className='layout'>
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </ThemeContext.Provider>
        </AuthContext.Provider>
    )
}
