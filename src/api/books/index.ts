import axiosInstance from "../axiosInstance";

export const getBook = () => {
  return axiosInstance.get("/books");
};
