import { Header} from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";

export const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
