import React from "react";
import { CenteredLayout } from "@/layout";
import { LoginContainer } from "@/pods/login/login.container";

export const LoginScene: React.FC = () => {
  return (
    <CenteredLayout>
      <LoginContainer />
    </CenteredLayout>
  );
};
