import axios from "axios";
import { useQuery } from "react-query";
import { Category } from "../Types/category";

type RequestParameters = {
  // category?: Category;
  category?: string;
  offset?: number;
  limit?: number;
}

const BASE_URL = `https://06163dx5uc.execute-api.ap-northeast-1.amazonaws.com/dev/api/sample-challenges`

const request = (params: RequestParameters) => axios({
  method: "get",
  url: BASE_URL,
  params: params,
})

async function fetchData(params: RequestParameters) {
  return await request(params);
}

export default request;