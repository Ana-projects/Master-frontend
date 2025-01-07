import React from "react";
import { OrganizationProvider } from "./organization-context";
import { AppRouter } from "@/router";
import { ProfileProvider } from "./core/providers";
import { LoginScene } from "./scenes";

export const App = () => {
  return (
    <ProfileProvider components={{ Login: <LoginScene /> }}>
      <OrganizationProvider>
        <AppRouter />
      </OrganizationProvider>
    </ProfileProvider>
  );
};
