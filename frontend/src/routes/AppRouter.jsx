import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { PublicRoutes } from "./PublicRoutes";
import { InitPage } from "../pages/InitPage";
import { HomePage } from "../pages/HomePage";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={PublicRoutes}>
          <Route path="/login" element={InitPage} />
          <Route path="/register" element={InitPage} />
        </Route>

        <Route element={PublicRoutes}>
          <Route path="/home" element={HomePage} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
