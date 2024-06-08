import { UserContext } from "./user.js";
import { useContext } from "react";

export const useUser = () => {
    return useContext(UserContext);
}
