import { ThemeContext } from "../../context/theme.js";
import { useContext } from 'react';
import { createPortal } from "react-dom";
import { Modal } from "../Modal/component.jsx";
import { ModalContext } from "../../context/modal.js";
import { AuthContext } from "../../context/user.js";

export const Header = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const { changeTheme } = useContext(ThemeContext);
    const { openModal, setOpenModal } = useContext(ModalContext)
    
    return (
        <header style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '10px',
        }}>
            <button
                type='button'
                onClick={changeTheme}
            >
                Toggle theme
            </button>
            {!currentUser.name.length
                ?
                <button
                    type='button'
                    onClick={() => setOpenModal(true)}
                >
                    Sing in
                </button>
                :
                <button
                    type='button'
                    onClick={() => {
                        setOpenModal(false)
                        setCurrentUser({ name: '' })
                    }}
                >
                    Sign out, {currentUser.name}
                </button>
            }
            
            {openModal && (createPortal(<Modal/>, document.getElementById('modal')))}
        </header>
    )
}

