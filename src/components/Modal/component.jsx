import { useContext, useState, useRef, useEffect } from "react";
import { ModalContext } from "../../context/modal.js";
import { AuthContext } from "../../context/user.js";

export const Modal = () => {
    const [value, setValue] = useState('');
    const modalRef = useRef(null);
    const { setOpenModal } = useContext(ModalContext);
    const { setCurrentUser } = useContext(AuthContext);
    
    const handleSignInUser = () => {
        if (value.length > 0) {
            setCurrentUser({name: value})
            setOpenModal(false)
        }
    }
    
    // useEffect(() => {
    //     console.log('modalRef', modalRef);
    // }, []);
    
    return (
        <div
            ref={modalRef}
            style={{
                position: 'absolute',
                top: '35%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20vw',
                height: '20vh',
                minWidth: '300px',
                minHeight: '250px',
                border: '1px solid black'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'space-around',
                    width: '100%',
                    height: '100%',
                }}
            >
                <input
                    type='text'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder='Your name'
                    style={{
                    width: '80%',
                    margin: '0 auto',
                    height: '15%',
                }}/>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <button
                        type='button'
                        onClick={handleSignInUser}
                    >
                        Sign in
                    </button>
                    <button
                        type='button'
                        onClick={() => setOpenModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
