import axios from "axios";

const dev = "https://yalantis-react-school-api.yalantis.com/api/v1";

const request = axios.create({
  baseURL: dev,
});

export default request;
