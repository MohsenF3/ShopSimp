import { createContext, useContext } from "react";

export const authContect = createContext();

export const useAuth = () => useContext(authContect);
