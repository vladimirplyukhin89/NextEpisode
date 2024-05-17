import { Header} from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
