import { AuthState, LoginPayload, User } from "@/types/auth";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk<
  User,
  LoginPayload,
  { rejectValue: string }
>("auth/loginUser", async (formData, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://dev.starting5.net/App/auth/login.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(data.message || "Login failed");
    }

    return data as User;
  } catch {
    return rejectWithValue("Something went wrong");
  }
});

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Login failed";
      });
  },
});

export default loginSlice.reducer;
