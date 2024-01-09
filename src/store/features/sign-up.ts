import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../server/api-client";


interface PostData {
  username: string;
  email: string;
  password: string;
}


interface User {
  id: string | null;
  username: string | null;
  email: string | null;
  status: string,
  error: string | null,
}

interface UserState {
  auth: User;
}


const initialState: UserState = {
  auth: {
    id: null,
    username: null,
    email: null,
    status: "idle",
    error: null,
  }
}


export const userSignup = createAsyncThunk("user/signup", async (postData: PostData) => {
  try {
    const response = await apiClient.post("/auth/users/", postData);
    return response.data;
  } catch (error) {
    // Handle errors here
    throw error;
  }
});

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    
  },

  extraReducers(builder) {
    builder
      .addCase(userSignup.fulfilled, (state, action) => {
        //data has been returned by AsyncThunk / fetch
        state.auth = {...action.payload.auth, status: "fulfilled", error: null}
      })
      .addCase(userSignup.pending, (state) => {
        state.auth = {...state.auth, status: "pending", error: null}
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.auth = {...state.auth, status: "rejected", error: action.error.message ? action.error.message : null}
      });    
  },
});

export default signupSlice.reducer;