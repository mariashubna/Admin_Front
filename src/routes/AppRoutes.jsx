import { Route, Routes } from "react-router-dom";
// import HomePage from "@pages/home/HomePage";
import NotFoundPage from "@pages/not-found/NotFoundPage.jsx";
import { Layout } from "@components/layout/Layout.jsx";
// import PrivateRoute from "@components/PrivateRoute.jsx";
import AuthPage from "../pages/authPage/AuthPage.jsx";
import UsersPage from "../pages/users/UsersPage.jsx";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AuthPage />} />
        {/* <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route> */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
