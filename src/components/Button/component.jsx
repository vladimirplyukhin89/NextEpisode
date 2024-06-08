import { useTheme } from "../../context/theme/hooks.js";
import { THEMES } from "../../context/theme/constants.js";
import cn from 'classnames';

import s from './style.module.css';

export const Button = ({ children, onClick, disabled }) => {
    const { theme } = useTheme();
    
    return <button
        className={cn(s.root, {
            [s.disabled]: disabled,
            [s.default]: theme === THEMES.default,
            [s.alternative]: theme === THEMES.alternative
            
        })}
        onClick={onClick} disabled={disabled}>
        {children}
    </button>
}
