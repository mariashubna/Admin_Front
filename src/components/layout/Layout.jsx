import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../header/Header";
import styles from "./Layout.module.css";

export const Layout = () => {
  //   const location = useLocation();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
