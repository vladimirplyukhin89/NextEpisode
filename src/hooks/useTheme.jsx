import { useState, useCallback } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('dark');
    
    const changeTheme = useCallback((newTheme) => {
        setTheme(newTheme);
    }, []);
    
    return { theme, changeTheme }
}
