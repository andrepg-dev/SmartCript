import { DBUser } from "@/interfaces/db-user";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Thunk para obtener el usuario de la API
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await fetch('/api/auth/profile');
  const data = await response.json() as DBUser;
  console.log('User data:', data);

  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null as DBUser | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user';
      });
  }
});

export const { clearUser } = userSlice.actions;
