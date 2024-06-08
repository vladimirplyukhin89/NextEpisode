import { Button } from "../Button/component.jsx";
import { useState } from "react";

export const AuthorizationForm = ({ onCancel, onLogin }) => {
    const [name, setName] = useState('');
    
    return (
        <div>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={() => {
                onLogin(name);
                setName('');
            }}>
                Login
            </Button>
        </div>
    );
}
