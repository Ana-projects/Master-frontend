import React from "react";
import { ProfileContext } from "@/core/providers";
import { Login } from "./login.component";
import { login } from "./api/api";
import { useNavigate } from "react-router-dom";
import { switchRoutes } from "@/router/routes";

export const LoginContainer: React.FC = () => {
  const { setProfile } = React.useContext(ProfileContext);
  const navigate = useNavigate();

  const handleSubmit = (username: string, password: string) => {
    login(username, password).then((result) => {
      setProfile(result.username);
      navigate(switchRoutes.list);
    });
  };

  return <Login onSubmit={handleSubmit} />;
};
