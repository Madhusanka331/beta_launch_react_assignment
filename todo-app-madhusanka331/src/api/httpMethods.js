import { axiosInstance } from "./axiosInstance";
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const post = async (endpoint, payload) =>
  await axiosInstance
    .post(endpoint, payload, { headers })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

export const get = async (endpoint) =>
  await axiosInstance
    .get(endpoint, { headers })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
