import { ThemeContext } from "../../context/theme.js";
import { useContext } from 'react';
import { createPortal } from "react-dom";
import { Modal } from "../Modal/component.jsx";
import { ModalContext } from "../../context/modal.js";

export const Header = () => {
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
            <button
                type='button'
                onClick={() => setOpenModal(true)}
            >
                Sing in
            </button>
        {openModal && (createPortal(<Modal />, document.getElementById('modal')))}
        </header>
    )
}

