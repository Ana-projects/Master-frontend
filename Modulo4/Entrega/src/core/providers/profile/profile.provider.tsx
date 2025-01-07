import React from "react";
import { ProfileContextModel } from "./profile.vm";

export const ProfileContext = React.createContext<ProfileContextModel>(null);

interface Props {
  components: { Login: React.ReactNode };
}

export const ProfileProvider: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  components: { Login },
}) => {
  const [username, setUsername] = React.useState<string>("");
  return (
    <ProfileContext.Provider value={{ username, setProfile: setUsername }}>
      {username ? <>{children}</> : Login}
    </ProfileContext.Provider>
  );
};
