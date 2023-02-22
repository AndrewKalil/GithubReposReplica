import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import FavoritesPage from "../pages/favorites.page";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import ProfilePage from "../pages/profile.page";
import RepositoriesPage from "../pages/repositories.page";
import SignupPage from "../pages/signup.page";
import MainApp from "./main_app.component";
import ProtectedRouteComponent from "./protected_route.component";
import UnprotectedRouteComponent from "./unprotected_route.component";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route element={<MainApp />}>
          <Route
            index
            path=""
            element={
              <ProtectedRouteComponent>
                <HomePage />
              </ProtectedRouteComponent>
            }
          />
          <Route
            index
            path="repositories"
            element={
              <ProtectedRouteComponent>
                <RepositoriesPage />
              </ProtectedRouteComponent>
            }
          />
          <Route
            path="favorites"
            element={
              <ProtectedRouteComponent>
                <FavoritesPage />
              </ProtectedRouteComponent>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRouteComponent>
                <ProfilePage />
              </ProtectedRouteComponent>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <UnprotectedRouteComponent>
              <LoginPage />
            </UnprotectedRouteComponent>
          }
        />
        <Route
          path="signup"
          element={
            <UnprotectedRouteComponent>
              <SignupPage />
            </UnprotectedRouteComponent>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
