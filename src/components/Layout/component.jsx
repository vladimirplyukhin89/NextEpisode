import { Header} from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";
import { AuthContext } from "../../context/user.js";
import { useState } from "react";
import { ModalContext } from "../../context/modal.js";
import { ThemeContextProvider } from "../../context/theme/provider.jsx";

export const Layout = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({ name: '' });
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <ModalContext.Provider value={{ openModal, setOpenModal }}>
            <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
                <ThemeContextProvider>
                    <div className='layout'>
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
                </ThemeContextProvider>
            </AuthContext.Provider>
        </ModalContext.Provider>
    )
}
