import { UserContext } from "./user.js";
import { useMemo, useState } from "react";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    
    const contextValue = useMemo(() => ({
        user,
        login: setUser,
        logout: () => setUser(null),
    }), [user]);
    
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}
