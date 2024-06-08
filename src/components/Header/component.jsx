import { useContext } from 'react';
import { createPortal } from "react-dom";
import { Modal } from "../Modal/component.jsx";
import { ModalContext } from "../../context/modal.js";
import { AuthContext } from "../../context/user.js";
import { ThemeToggler } from "../ThemeToggler/component.jsx";

export const Header = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const { openModal, setOpenModal } = useContext(ModalContext)
    
    return (
        <header style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '10px',
        }}>
            <ThemeToggler />
            {/*{!currentUser.name.length*/}
            {/*    ?*/}
            {/*    <Button*/}
            {/*        onClick={() => {*/}
            {/*            setOpenModal(true)*/}
            {/*        }*/}
            {/*    }*/}
            {/*    >*/}
            {/*        Sing in*/}
            {/*    </Button>*/}
            {/*    :*/}
            {/*    <button*/}
            {/*        type='button'*/}
            {/*        onClick={() => {*/}
            {/*            setOpenModal(false)*/}
            {/*            setCurrentUser({ name: '' })*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        Sign out, {currentUser.name}*/}
            {/*    </button>*/}
            {/*}*/}
            
            {openModal && (createPortal(<Modal/>, document.getElementById('modal')))}
        </header>
    )
}

