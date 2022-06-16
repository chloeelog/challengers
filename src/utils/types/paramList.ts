import { ParamListBase } from "@react-navigation/native";
import { ChallengeType } from "./challenge";

export type AppStackParamList = {
  Root: undefined,
  Cart: undefined,
  ChallengeDetail: {
    challenge: ChallengeType,
  }
} & ParamListBase;

// export type ChallengeDetailScreenParamListType = {
//   params: {
//     challenge: ChallengeType,
//   }
// } & ParamListBase;