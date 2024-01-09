import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../server/api-client";


interface PostData {
    username: string;
    password: string;
}


interface LoginData {
    access: string | null;
    refresh: string | null;
    status: string,
    error: string | null,
}

interface UserState {
    auth: LoginData;
}


const initialState: UserState = {
    auth: {
        access: null,
        refresh: null,
        status: "idle",
        error: null,
    }
}


export const userLogin = createAsyncThunk("user/login", async (postData: PostData) => {
    try {
        const response = await apiClient.post("/auth/jwt/create", postData);
        return response.data;
    } catch (error) {
        // Handle errors here
        throw error;
    }
});

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logout: (state) => {
            state.auth = { ...initialState.auth }
        },
    },

    extraReducers(builder) {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                //data has been returned by AsyncThunk / fetch
                state.auth = { ...action.payload.auth, status: "fulfilled", error: null }
            })
            .addCase(userLogin.pending, (state) => {
                state.auth = { ...state.auth, status: "pending", error: null }
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.auth = { ...state.auth, status: "rejected", error: action.error.message ? action.error.message : null }
            });
    },
});

export default loginSlice.reducer;
export const { logout } = loginSlice.actions;