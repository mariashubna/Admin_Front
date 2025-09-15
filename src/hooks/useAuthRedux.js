import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  selectAuth,
  selectUser,
  selectIsAuthenticated,
  selectIsSignInLoading,
  selectIsSignOutLoading,
  selectError,
  signIn,
  signOut,
} from "@/redux/slices/authSlice.js";

export const useAuthRedux = () => {
  const dispatch = useDispatch();

  // --- State из Redux ---
  const auth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isSignInLoading = useSelector(selectIsSignInLoading);
  const isSignOutLoading = useSelector(selectIsSignOutLoading);
  const error = useSelector(selectError);

  // --- Методы ---
  const login = async (credentials) => {
    return dispatch(signIn(credentials)).unwrap();
  };

  const logout = async () => {
    return dispatch(signOut()).unwrap();
  };

  const resetError = () => {
    dispatch(clearError());
  };

  return {
    // --- State ---
    auth,
    user,
    isAuthenticated,
    isSignInLoading,
    isSignOutLoading,
    error,

    // --- Methods ---
    login,
    logout,
    resetError,
  };
};
