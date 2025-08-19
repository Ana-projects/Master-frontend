import React from "react";
import { LoginPage } from "./login";

interface UserContextModel {
  handleLogin: (name: string, password: string) => void;
}

export const UserContext = React.createContext<UserContextModel>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  const handleLogin = (name: string, password: string) => {
    if (name === "admin" && password === "test") {
      setIsUserLoggedIn(true);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };
  return (
    <UserContext.Provider value={{ handleLogin }}>
      {isUserLoggedIn ? children : <LoginPage />}
    </UserContext.Provider>
  );
};
