import { createContext, useContext, useState, useCallback } from "react";

export const UserContext = createContext({ userName: null, setUserName: () => {} });

export const UserContextProvider = ({
  children,
}) => {
  const [userName, setUserName] = useState("");

  const logIn = useCallback((name) => setUserName(name), [setUserName]);
  const logOut = useCallback(() => setUserName(null), [setUserName]);


  return (
    <UserContext.Provider  value={{ userName, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
