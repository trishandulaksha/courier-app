import axios from "axios";
import { loginUserProp } from "./data-handlers/loginDataHandle";

const API_URL = process.env.API_URL || "http://localhost:8070/api/public";

export const loginUser = async (
  endpoint: string,
  userData: loginUserProp,
  setDBResponse: React.Dispatch<
    React.SetStateAction<{ error: string | null; success: string | null }>
  >
) => {
  const response = await axios.post(`${API_URL}/${endpoint}`, userData);

  setDBResponse({
    error: response?.data.error,
    success: response?.data.success,
  });
};

export const registerUser = async (
  endpoint: string,
  userData: loginUserProp,
  setDBResponse: React.Dispatch<
    React.SetStateAction<{ error: string | null; success: string | null }>
  >
) => {
  const response = await axios.post(`${API_URL}/${endpoint}`, userData);

  console.log("Register data backend response", response);
  setDBResponse({
    error: response?.data.error,
    success: response?.data.success,
  });
};
