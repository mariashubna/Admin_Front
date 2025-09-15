import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import NotFoundPage from "@pages/not-found/NotFoundPage";
import { Layout } from "@components/layout/Layout";
import PrivateRoute from "@components/PrivateRoute";
import AuthPage from "../pages/authPage/AuthPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AuthPage />} />
        {/* <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route> */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
