import { Header} from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";
import { ThemeContext } from "../../context/theme.js";
import { useTheme } from "../../hooks/useTheme.jsx";

export const Layout = ({ children }) => {
    const { theme, changeTheme  } = useTheme();
    
    return (
        <ThemeContext.Provider value={{ theme, changeTheme}}>
            <div className='layout'>
                <Header/>
                {children}
                <Footer/>
            </div>
        </ThemeContext.Provider>
    
    )
}
