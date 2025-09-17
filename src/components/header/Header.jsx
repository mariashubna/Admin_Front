// import { NavLink, useLocation } from "react-router-dom";
import css from "./Header.module.css";

// import PrivateContentArea from "../privateContentArea/PrivateContentArea";

export const Header = () => {
  // const location = useLocation();
  // const {breakpoint} = useBreakpoint();
  // const isMobile = breakpoint === "mobile" || breakpoint === "mobile-small";
  // const {isAuthenticated} = useAuthRedux();
  // const isWhiteHeader =
  //     location.pathname === "/add-recipe" ||
  //     location.pathname === "/profile" ||
  //     location.pathname.includes("profile") ||
  //     location.pathname.includes("recipe-details");
  return (
    <header className={css.header}>
      <p>V-Click</p>
      <p>AdminPanel</p>
    </header>
    //         className={`${styles.header} ${isWhiteHeader ? styles.whiteTheme : ""}`}
    //     >
    //         <div className={styles.logoWrapper}>
    //             <Logo/>
    //         </div>
    //         {!isMobile && (
    //             <nav className={styles.nav}>
    //                 <ul>
    //                     <li className={styles.itemLink}>
    //                         <NavLink
    //                             to="/"
    //                             className={({isActive}) =>
    //                                 `${styles.link} ${isActive ? styles.active : ""} ${
    //                                     isWhiteHeader ? styles.white : ""
    //                                 }`
    //                             }
    //                         >
    //                             HOME
    //                         </NavLink>
    //                     </li>
    //                     <li className={styles.itemLink}>
    //                         <PrivateContentArea>
    //                             <NavLink
    //                                 to="/add-recipe"
    //                                 className={({isActive}) =>
    //                                     `${styles.link} ${isActive ? styles.active : ""} ${
    //                                         isWhiteHeader ? styles.white : ""
    //                                     }`
    //                                 }
    //                             >
    //                                 ADD RECIPE
    //                             </NavLink>
    //                         </PrivateContentArea>
    //                     </li>
    //                 </ul>
    //             </nav>
    //         )}
    //         <div className={styles.userbarWrapper}>
    //             {isAuthenticated ? <UserBar/> : <SignToggle/>}
    //             {isMobile && isAuthenticated && (
    //                 <BurgerMenu isWhiteTheme={isWhiteHeader}/>
    //             )}
    //         </div>
  );
};
