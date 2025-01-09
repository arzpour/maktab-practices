import { getSession } from "@/utils/session";
import axios from "axios";

export const generateAxiosInstance = () => {
  const token = getSession();
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: { Authorization: token },
  });
};
