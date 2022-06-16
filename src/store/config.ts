import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
})

export default store;