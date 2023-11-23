// Type
import { userData } from "./types";
// Instance
import axiosInstance from "../axiosInstance";

export const addUser = (userData: userData) => {
  return axiosInstance.post("/user/register", userData);
};
