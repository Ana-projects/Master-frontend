import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { OrganizationProvider } from "./organization.provider";
import { UserProvider } from "./user.context";

export const App: React.FC = () => {
  return (
    <UserProvider>
      <OrganizationProvider>
        <AppRouter />
      </OrganizationProvider>
    </UserProvider>
  );
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to={"/list"} />} />
      </Routes>
    </Router>
  );
};
