// "id": "cb1a3292-39d4-4eaa-857a-c56124f0ad77",
//     "items": [],
//     "created_at": "2023-12-30T06:22:36.820907Z",
//     "total_price": 0

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "./product-slice";
import apiClient from "../../server/api-client";

export interface PostItem {
    product_id: string;
    quantity: number;
}

interface postItemResponse {
    id: string;
}

interface CartItem {
    product: Product;
    quantity: number;
    total_price: number;
}

interface Cart {
    id: string;
    items: CartItem[];
    total_price: number;
}

interface CartState {
    cart: Cart;
    status: string;
    error: string | null;
}

const initialState: CartState = {
    cart: {
        id: "",
        items: [],
        total_price: 0
    },
    status: "idle",
    error: null
};

export const getCart = createAsyncThunk("store/cart", async () => {
    if (!localStorage.getItem("cartId")) {
        throw "no item element yet";
    }

    try {
        const response = await apiClient.get<Cart>("/store/carts/" + localStorage.getItem("cartId"));
        return response.data;
    }
    catch (error) {
        throw error;
    }
});


export const postCartItem = createAsyncThunk("store/cart/item", async (postItem: PostItem) => {
    try {
        if (!localStorage.getItem("cartId")) {
            const responseCart = await apiClient.post<Cart>("/store/carts/");
            localStorage.setItem("cartId", responseCart.data.id);
        }

        const response = await apiClient.post<postItemResponse>("/store/carts/" + localStorage.getItem("cartId") + "/items/", postItem);
        const responseCartItem = await apiClient.get<CartItem>("/store/carts/" + localStorage.getItem("cartId") + "/items/" + response.data.id)
        return responseCartItem.data
    }
    catch (error) {
        throw error
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    },

    extraReducers(builder) {
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload
            state.error = null
            state.status = "fulfilled"
        }).addCase(getCart.pending, (state) => {
            state.cart = {
                id: "",
                items: [],
                total_price: 0
            }
            state.error = null
            state.status = "pending"
        }).addCase(getCart.rejected, (state, action) => {
            state.cart = {
                id: "",
                items: [],
                total_price: 0
            }
            state.error = action.error.message ? action.error.message : null
            state.status = "rejected"
        });

        builder.addCase(postCartItem.fulfilled, (state, action) => {
            state.cart.items = [...state.cart.items, action.payload]
            state.cart.total_price += (action.payload.quantity * action.payload.product.unit_price)
        });
    }

});

export default cartSlice.reducer;