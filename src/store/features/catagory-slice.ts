import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../server/api-client";



interface Catagory {
    id: string;
    title: string;
}

interface CatagoryState {
    catagory: Catagory[];
    status: string;
    error: null | string;
}


const initialState: CatagoryState = {
    catagory: [],
    status: "idle",
    error: null
}


export const getCatagory = createAsyncThunk("store/product", async () => {
    try {
        const response = await apiClient.get<Catagory[]>("/store/catagorys");
        return response.data;
    }
    catch (error) {
        throw error;
    }
});


const catagorySlice = createSlice(
    {
        name: "catagory",
        initialState,
        reducers: {},
        extraReducers(builder) {
            builder
                .addCase(getCatagory.fulfilled, (state, action) => {
                    state.catagory = [...action.payload]
                    state.error = null
                    state.status = "fulfilled"
                })
                .addCase(getCatagory.pending, (state) => {
                    state.catagory = []
                    state.error = null
                    state.status = "pending"
                })
                .addCase(getCatagory.rejected, (state, action) => {
                    state.catagory = []
                    state.error = action.error.message ? action.error.message : null
                    state.status = "rejected"
                });

        }
    }

)

export default catagorySlice.reducer;