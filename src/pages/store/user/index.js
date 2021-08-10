import axios from "axios";
export const login = (values) => {
  return axios.post("/login", values);
};
export const getUserId = ({ company_id, token }) => {
  return axios.get(`user?company_id=${company_id}&product=outreach`);
};
