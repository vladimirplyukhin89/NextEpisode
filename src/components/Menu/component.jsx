import { useState } from 'react';
import { Dish } from "../Dish/component.jsx";
import { Button } from "../Button/component.jsx";

export const Menu = ({ menu }) => {
    const [count, setCount] = useState(0);
    
    if (!menu) {
        return null
    }
    
    function increment() {
        if (count === 5) {
            return
        }
        setCount(count + 1);
    }
    
    function decrement() {
        if (count === 0) {
            return
        }
        setCount(count - 1);
    }
    
    
    return (
        <div
            style={{
                border: '2px solid yellow',
                borderRadius: '6px',
                marginBottom: '5px'
            }}>
            {Boolean(menu?.length) && (
                <>
                    <h3>Меню</h3>
                    <ul>
                        {menu.map(({id, name}) => (
                            <li key={id}>
                                {Boolean(name?.length) && <Dish name={name}/>}
                            </li>
                        ))}
                    </ul>
                </>
            )}
         <Button
             count={count}
             decrement={decrement}
             increment={increment}
         />
        </div>
    )
}
