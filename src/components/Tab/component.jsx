import { THEMES } from "../../context/theme/constants.js";

export const Tab = ({ theme, title, onClick, isActive }) => {
    return (
        <button
            style={{
                backgroundColor: theme === THEMES.default ? 'grey' : 'orangered',
                cursor: 'pointer'}}
            onClick={onClick}
            disabled={isActive}>
            {title}
        </button>
    )
}
