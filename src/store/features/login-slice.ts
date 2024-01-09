import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../server/api-client";


interface PostData {
    username: string;
    password: string;
}


interface LoginData {
    access: string;
    refresh: string;
}

interface UserState {
    auth: LoginData | null;
    status: string,
    error: string | null,
}


const initialState: UserState = {
    auth: null,
    status: "idle",
    error: null,
}


export const userLogin = createAsyncThunk("user/login", async (postData: PostData) => {
    try {
        const response = await apiClient.post("/auth/jwt/create", postData);

        return response.data;
    } catch (error) {
        throw error;
    }
});

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logout: (state) => {
            state.auth = null
            state.error = null
            state.status = "idle"
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        },
    },

    extraReducers(builder) {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                //data has been returned by AsyncThunk / fetch
                state.auth = { ...action.payload }
                state.error = null
                state.status = "fulfilled"
                if (state.auth?.access) { localStorage.setItem("accessToken", state.auth?.access); }
                if (state.auth?.refresh) { localStorage.setItem("refreshToken", state.auth?.refresh); }
            })
            .addCase(userLogin.pending, (state) => {
                state.auth = null
                state.error = null
                state.status = "pending"
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.auth = null
                state.error = action.error.message ? action.error.message : null
                state.status = "fulfilled"
            });
    },
});

export default loginSlice.reducer;
export const { logout } = loginSlice.actions;