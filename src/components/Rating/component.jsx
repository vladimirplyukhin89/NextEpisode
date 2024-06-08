import { createArray } from "../../helpers/createArray.js";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme.js";
import { Button } from "../Button/component.jsx";
import { THEMES } from "../../context/theme/constants.js";

export const Rating = ({ value, onClick, totalRating = 5 }) => {
    const { theme } = useContext(ThemeContext);
 
    return (
        <div style={{
            marginTop: '40px',
          }}>
            {createArray(totalRating).map((_, index) => (
                <Button
                    style={{
                        margin: '5px',
                        padding: '10px',
                        backgroundColor: theme === THEMES.default ? 'grey' : 'orangered',
                        cursor: 'pointer'
                        }}
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
