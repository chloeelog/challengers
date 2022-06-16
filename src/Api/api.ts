import axios from "axios";

type RequestParameters = {
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

export default request;