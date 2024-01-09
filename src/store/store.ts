import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./features/sign-up";
import loginReducer from "./features/login-slice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        signup: signupReducer,
        login: loginReducer,
    }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector;