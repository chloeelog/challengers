import { ChallengeType } from "./challenge"

export type ChallengesApiReponse = {
  data: {
    challenges: ChallengeType[]
  }
}