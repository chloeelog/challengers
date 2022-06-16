import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChallengeType } from "../../utils/types/challenge";

const initialState: ChallengeType[] = []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ChallengeType>) {
      const nextState = state.concat(action.payload);
      state = nextState;
    },
    deleteFromCart(state, action: PayloadAction<ChallengeType>) {
      const nextState = state.filter((challenge) => challenge.id !== action.payload.id)
      state = nextState;
    }
  }
})

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice;