import { Header} from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";
import { ThemeContext } from "../../context/theme.js";
import { useTheme } from "../../hooks/useTheme.jsx";
import { AuthContext } from "../../context/user.js";
import { useState } from "react";
import { ModalContext } from "../../context/modal.js";

export const Layout = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({ name: '' });
    const [openModal, setOpenModal] = useState(false);
    const { theme, changeTheme  } = useTheme();
    
    return (
        <ModalContext.Provider value={{ openModal, setOpenModal }}>
            <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
                <ThemeContext.Provider value={{ theme, changeTheme }}>
                    <div className='layout'>
                        {openModal && <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1,
                            }} />}
                        <div
                            id='modal'
                            style={{
                                position: 'relative',
                                zIndex: 2,
                                width: '100%',
                                height: '100%',
                        }}>
                            <Header/>
                            {children}
                            <Footer/>
                        </div>
                    </div>
                </ThemeContext.Provider>
            </AuthContext.Provider>
        </ModalContext.Provider>
    )
}
