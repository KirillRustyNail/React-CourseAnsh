import { UserContext } from "./UserContextProvider";
import {useContext} from "react";

export const useUser = () => useContext(UserContext); 