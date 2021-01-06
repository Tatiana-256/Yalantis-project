import axios from "axios";

const dev = "https://yalantis-react-school-api.yalantis.com/api/v1";

export const request = axios.create({
  baseURL: dev,
});
