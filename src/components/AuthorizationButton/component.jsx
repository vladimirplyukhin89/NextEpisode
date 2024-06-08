import { useUser } from "../../context/user/hooks.js";
import { Button } from "../Button/component.jsx";
import { useCallback, useState } from "react";
import { Modal } from "../Modal/component.jsx";
import { AuthorizationForm } from "../AuthorizationForm/component.jsx";

export const AuthorizationButton = () => {
    const { user, logout, login } = useUser();
    const [isVisible, setIsVisible] = useState(false);
    
    const handleClose = useCallback(() => {
        setIsVisible(false);
    }, []);
    
    const handleLogin = useCallback((name) => {
        login(name);
        handleClose();
    }, [handleClose, login])
    
    return (
        <div>
            <span>{user}</span>
            {user
                ? <Button onClick={logout}>Logout</Button>
                : <Button onClick={() => setIsVisible(true)}>Login</Button>
            }
            {isVisible && <Modal onClose={handleClose}>
                <AuthorizationForm onCancel={handleClose} onLogin={handleLogin} />
            </Modal>}
        </div>
    )
}
