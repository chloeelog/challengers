import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChallengeType } from "../../utils/types/challenge";

type State = {
  registered: ChallengeType[]
}

const initialState: State = {
  registered: [],
}

const registerSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    register(state, action: PayloadAction<ChallengeType>) {
      const nextState = state.registered.concat(action.payload);
      state.registered = nextState;
    },
    // deleteFromCart(state, action: PayloadAction<ChallengeType>) {
    //   const nextState = state.registered.filter((challenge) => challenge.id !== action.payload.id)
    //   state.registered = nextState;
    // }
  }
})

export const { register } = registerSlice.actions;

export default registerSlice;