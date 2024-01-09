import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClientSecure } from "../../server/api-client";

interface User {
    id: string
}

interface UserState {
    user: User | null;
    status: string;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    status: "idle",
    error: null,
}

export const getUser = createAsyncThunk("auth/users/me", async () => {
    try{
        const response = await apiClientSecure.get("/auth/users/me");
        console.log(response.data);
        return response.data;
    }
    catch(error) {
        throw error;
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    
    },
    extraReducers(builder) {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = {id: action.payload.id}
            state.error = null
            state.status = "fulfilled"
        }).addCase(getUser.rejected, (state, action) => {
            state.user = null;
            state.status = "rejected";
            state.error = action.error.message ? action.error.message : null;
        });
    }
})

export default userSlice.reducer;