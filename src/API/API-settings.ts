import axios from "axios";

const dev = "https://yalantis-react-school-api.yalantis.com/api/v1";
export const authKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCi0LXRgtGP0L3QsCDQnNCw0YLQstGW0ZTQvdC60L4iLCJpYXQiOjE2MTExNzQwNDIsImV4cCI6MTYxNjM1ODA0Mn0.Bg_aMEcz903l9EVEbNLIO6MwUtMNmPl-HWEVB427DEw";

const request = axios.create({
  baseURL: dev,
});

export default request;
