import { createArray } from "../../helpers/createArray.js";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.js";

export const Rating = ({ value, onClick, totalRating = 5 }) => {
    const { theme } = useContext(ThemeContext);
 
    return (
        <div style={{marginTop: '40px'}}>
            {createArray(totalRating).map((_, index) => (
                <button
                    style={{
                        margin: '5px',
                        padding: '10px',
                        backgroundColor: `${theme ? 'yellowgreen' : 'grey'}`}}
                    disabled={value === index + 1}
                    key={index}
                    value={value}
                    onClick={() => onClick(index + 1)}
                >{index + 1}</button>
            ))}
        </div>
    )
}
