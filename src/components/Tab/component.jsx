import { Button } from "../Button/component.jsx";

export const Tab = ({ title, onClick, isActive }) => {
    return (
        <Button
            onClick={onClick}
            disabled={isActive}>
            {title}
        </Button>
    )
}
