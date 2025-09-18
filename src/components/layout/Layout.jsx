import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../header/Header.jsx";
import styles from "./Layout.module.css";
import AsideBar from "../aside/AsideBar.jsx";

export const Layout = () => {
  //   const location = useLocation();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <AsideBar />
        <Outlet />
      </main>
    </>
  );
};
