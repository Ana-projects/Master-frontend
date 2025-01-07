import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScene, ListScene, DetailScene } from "@/scenes";
import { switchRoutes } from "@/router/routes";

export const AppRouter: React.FC = () => {
  debugger;
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
      </Routes>
    </Router>
  );
};
