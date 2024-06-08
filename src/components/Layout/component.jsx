import { Header} from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";

import s from './style.module.css';

export const Layout = ({ children }) => {
    return (
        <div className={s.root}>
            <div id='modal' className={s.modal} />
            <div className={s.container}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}
