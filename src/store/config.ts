import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  cartStore: cartSlice.reducer,
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