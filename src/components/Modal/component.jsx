import { createPortal } from "react-dom";

import s from './style.module.css';

export const Modal = ({ onClose, children }) => {
    
    return createPortal(
        <>
            <div onClick={onClose} className={s.overlay} />
            <div className={s.wrapper}>
                <div role='button' onClick={onClose} className={s.close}>x</div>
                {children}
            </div>
        </>,
        document.getElementById('modal'))
}
