// "id": 4,
//         "title": "Coffee Maker",
//         "images": [],
//         "description": "Brews great coffee in minutes",
//         "unit_price": "49.99",
//         "last_update": "2023-12-27T23:35:40Z"



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../server/api-client";

export interface Product {
    id: string,
    title: string,
    images: string[],
    description: string,
    unit_price: number,
    last_update: Date,
}

export interface ProductStateInner {
    products: Product[];
    status: string,
    error: string | null,
}

interface ProductState {
    today: ProductStateInner | null,
    month: ProductStateInner | null,
    our: ProductStateInner | null,
}


const initialState: ProductState = {
    today: null,
    month: null,
    our: null,
}


export const getAllProduct = createAsyncThunk("store/product/all", async () => {
    try {
        const response = await apiClient.get("/store/products");
        return response.data;
    } catch (error) {
        // Handle errors here
        throw error;
    }
});


export const getMonthProduct = createAsyncThunk("store/product/month", async () => {
    try {
        const response = await apiClient.get("/store/products", { params: {month: 12}});
        return response.data;
    } catch (error) {
        // Handle errors here
        throw error;
    }
});


export const getTodayProduct = createAsyncThunk("store/product/today", async () => {
    try {
        const response = await apiClient.get("/store/products", { params: {day: 29}});
        return response.data;
    } catch (error) {
        // Handle errors here
        throw error;
    }
});


export const productSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
    },

    extraReducers(builder) {
        builder
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.our = { error: null, status: "fulfilled", products: [...action.payload] }
            })
            .addCase(getAllProduct.pending, (state) => {
                state.our = { products: [], error: null, status: "pending" }
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.our = { products: [], error: action.error.message ? action.error.message : null, status: "rejected" }
            });

        builder
            .addCase(getMonthProduct.fulfilled, (state, action) => {
                state.month = { error: null, status: "fulfilled", products: [...action.payload] }
            })
            .addCase(getMonthProduct.pending, (state) => {
                state.month = { products: [], error: null, status: "pending" }
            })
            .addCase(getMonthProduct.rejected, (state, action) => {
                state.month = { products: [], error: action.error.message ? action.error.message : null, status: "rejected" }
            });

        builder
            .addCase(getTodayProduct.fulfilled, (state, action) => {
                state.today = { error: null, status: "fulfilled", products: [...action.payload] }
            })
            .addCase(getTodayProduct.pending, (state) => {
                state.today = { products: [], error: null, status: "pending" }
            })
            .addCase(getTodayProduct.rejected, (state, action) => {
                state.today = { products: [], error: action.error.message ? action.error.message : null, status: "rejected" }
            });



    },
});

export default productSlice.reducer;
// export const { logout } = productSlice.actions;