import { Button } from "../Button/component.jsx";
import { useState } from "react";
import cn from 'classnames';

import s from './style.module.css';
import { useTheme } from "../../context/theme/hooks.js";
import { THEMES } from "../../context/theme/constants.js";

export const AuthorizationForm = ({ onCancel, onLogin }) => {
    const [name, setName] = useState('');
    const { theme } = useTheme();
    
    return (
        <div className={s.root}>
            <div className={cn(s.container, {
                [s.default]: theme === THEMES.default,
                [s.alternative]: theme === THEMES.alternative,
            })}>
                <input
                    className='input'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <div className={s.wrapper}>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button onClick={() => {
                        onLogin(name);
                        setName('');
                    }}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}
