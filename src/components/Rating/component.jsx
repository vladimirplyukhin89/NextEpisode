import { createArray } from "../../helpers/createArray.js";
import { Button } from "../Button/component.jsx";

import s from './style.module.css'

export const Rating = ({ value, onClick, totalRating = 5 }) => {
 
    return (
        <div className={s.root}>
            {createArray(totalRating).map((_, index) => (
                <Button
                    disabled={value === index + 1}
                    key={index}
                    value={value}
                    onClick={() => onClick(index + 1)}
                >{index + 1}
                </Button>
            ))}
        </div>
    )
}
