import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChallengeType } from "../../utils/types/challenge";

type State = {
  cart: ChallengeType[]
}

const initialState: State = {
  cart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ChallengeType>) {
      console.log("이전", state);
      const nextState = state.cart.concat(action.payload);
      state.cart = nextState;
      console.log("추가할게요", nextState);
      console.log("추가했어요", state);
    },
    deleteFromCart(state, action: PayloadAction<ChallengeType>) {
      const nextState = state.cart.filter((challenge) => challenge.id !== action.payload.id)
      state.cart = nextState;
    }
  }
})

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice;