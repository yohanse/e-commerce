import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./features/sign-up";
import loginReducer from "./features/login-slice";
import productReducer from "./features/product-slice";
import catagoryReducer from "./features/catagory-slice";
import userReducer from "./features/user-slice";
import cartSlice from "./features/cart-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        signup: signupReducer,
        login: loginReducer,
        product: productReducer,
        catagory: catagoryReducer,
        user: userReducer,
        cart: cartSlice,
    }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector;