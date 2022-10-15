import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

export const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorageState("globalUser", null);

  const login = async () => {
    setUser("sjk");
  };
  const logout = async () => {
    setUser(null);
  };
  const values = { user, login, logout };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
