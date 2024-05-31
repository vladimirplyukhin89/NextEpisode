import { createArray } from "../../helpers/createArray.js";

export const Rating = ({ value, onClick, totalRating = 5 }) => {
    console.log(value)
    return (
        <div style={{marginTop: '40px'}}>
            {createArray(totalRating).map((_, index) => (
                <button
                    style={{
                        margin: '5px',
                        padding: '10px',
                        backgroundColor: `${value === index + 1 ? 'tomato' : ''}`}}
                    disabled={value === index + 1}
                    key={index}
                    value={value}
                    onClick={() => onClick(index + 1)}
                >{index + 1}</button>
            ))}
        </div>
    )
}
