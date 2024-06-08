import { Header} from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";

export const Layout = ({ children }) => {
    return (
        <div>
            <div id='modal' style={{position: 'relative', zIndex: 2}} />
            <div style={{position: 'relative', zIndex: 1}}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}
