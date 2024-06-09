import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import './styles/style.css';
import { Provider } from "react-redux";
import { store } from "./redux/index.js";

const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
