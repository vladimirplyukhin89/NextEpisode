import { useState, useCallback } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(true);
    
    const changeTheme = useCallback(() => {
        setTheme((prevState) => !prevState);
    }, []);
    
    return { theme, changeTheme }
}
