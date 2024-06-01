export const Tab = ({ theme, title, onClick, isActive }) => {
    return (
        <button
            style={{
                backgroundColor: `${theme ? 'yellowgreen' : 'grey'}`,
                cursor: 'pointer'}}
            onClick={onClick}
            disabled={isActive}>
            {title}
        </button>
    )
}
