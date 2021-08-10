import axios from "axios";

export const getTasks = (company_id) => {
  return axios.get(
    `/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=${company_id}`
  );
};

export const createTask = (values, company_id) => {
  return axios.post(
    `/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=${company_id}`,
    values
  );
};

export const deleteTask = (id, company_id) => {
  return axios.delete(
    `/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${id}?company_id=${company_id}`
  );
};

export const updateTask = (values, company_id) => {
  let obj = { ...values };
  delete obj.id;
  return axios.put(
    `/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/${values.id}?company_id=${company_id}`,
    obj
  );
};
