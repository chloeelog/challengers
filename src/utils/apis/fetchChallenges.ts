import axios from "axios";

import { Category } from "../types/category";

type RequestParameters = {
  category?: Category;
  offset?: number;
  limit?: number;
}

const BASE_URL = `https://06163dx5uc.execute-api.ap-northeast-1.amazonaws.com/dev/api`

const Request = axios.create({
  baseURL: BASE_URL
})

export const fetchChallenges = <T extends unknown>(params: RequestParameters) => Request.get<T>('/sample-challenges', {
  params: params
})