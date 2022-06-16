import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import cartSlice from "./slices/cartSlice";
import registerSlice from "./slices/registerSlice";

const rootReducer = combineReducers({
  cartStore: cartSlice.reducer,
  registerStore: registerSlice.reducer,
});

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;