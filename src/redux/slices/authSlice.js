import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../services/authService.js";

const STORAGE_KEY = "auth";

// Вытаскиваем данные из localStorage
let token = null;
let user = null;

const storedData = localStorage.getItem(STORAGE_KEY);
if (storedData) {
  try {
    const parsed = JSON.parse(storedData);
    token = parsed.token || null;
    user = parsed.user || null;
  } catch (e) {
    console.error("Error parsing auth data:", e);
  }
}

// --- Async thunks ---

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.signIn(credentials);

      const authData = {
        token: response.token,
        user: {
          name: response.user.name,
          avatar: response.user.avatar || null,
        },
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));

      return authData;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Sign in failed"
      );
    }
  }
);

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await authService.signOut();
    } catch (error) {
      // даже если API упало, всё равно чистим
      console.warn("Sign out API failed, clearing locally");
    }

    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
);

// --- Initial state ---

const initialState = {
  user,
  token,
  isAuthenticated: !!token,
  isSignInLoading: false,
  isSignOutLoading: false,
  error: null,
};

// --- Slice ---

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // sign in
      .addCase(signIn.pending, (state) => {
        state.isSignInLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isSignInLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isSignInLoading = false;
        state.error = action.payload;
      })

      // sign out
      .addCase(signOut.pending, (state) => {
        state.isSignOutLoading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isSignOutLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isSignOutLoading = false;
        state.error = action.payload;
        // всё равно обнуляем
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      });
  },
});

// --- Actions ---
export const { clearError } = authSlice.actions;

// --- Selectors ---
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsSignInLoading = (state) => state.auth.isSignInLoading;
export const selectIsSignOutLoading = (state) => state.auth.isSignOutLoading;
export const selectError = (state) => state.auth.error;

// --- Reducer ---
export default authSlice.reducer;
