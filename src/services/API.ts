import axios from "axios";
import { loginUserProp } from "./data-handlers/loginDataHandle";
import { OTPRequestProps } from "./data-handlers/OTPRequestEmailHandler";

const API_URL = process.env.API_URL || "http://localhost:8070/api/public";

// ////////////////////////////
// USER LOGIN API ////////////////////////////////
// ///////////////////////////
export namespace API {
  export const loginUserApi = async (
    endpoint: string,
    userData: loginUserProp,
    setDBResponse: React.Dispatch<
      React.SetStateAction<{ error: string | null; success: boolean }>
    >
  ) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, userData);
      setDBResponse({
        error: response?.data.error,
        success: response?.data.success,
      });

      localStorage.setItem("token", response.data.data);
    } catch (error) {
      setDBResponse({
        error: "Internal Server Error",
        success: false,
      });
    }
  };

  // ////////////////////////////
  // USER REGISTER API ////////////////////////////////
  // ///////////////////////////
  export const registerUserApi = async (
    endpoint: string,
    userData: loginUserProp,
    setDBResponse: React.Dispatch<
      React.SetStateAction<{ error: string | null; success: boolean }>
    >
  ) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, userData);

      console.log("Register data backend response", response);
      setDBResponse({
        error: response?.data.error,
        success: response?.data.success,
      });
    } catch (error) {
      setDBResponse({
        error: "Internal Server Error",
        success: false,
      });
    }
  };

  // ////////////////////////////
  // USER FORGET PASSWORD API ////////////////////////////////
  // ///////////////////////////
  export const requestOTPApi = async (
    endpoint: string,
    userData: OTPRequestProps,
    setDBResponse: React.Dispatch<
      React.SetStateAction<{
        error: string | null;
        success: boolean;
        data: {
          userEmail: string | null;
          userId: string | null;
          token: string | null;
        };
      }>
    >
  ) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, userData);

      if (response) {
        setDBResponse({
          error: response?.data.error,
          success: response?.data.success,
          data: response?.data.data,
        });
      }
    } catch (error) {
      setDBResponse({
        error: "Internal server error",
        success: false,
        data: {
          userEmail: null,
          userId: null,
          token: null,
        },
      });
    }
  };

  // ////////////////////////////
  // USER OTP VERIFY API ////////////////////////////////
  // ///////////////////////////
  export const verifyOTP = async (
    endpoint: string,
    {
      userId,
      OTPValues,
    }: {
      userId: string | null;
      OTPValues: string | null;
    },
    setDBResponse: React.Dispatch<
      React.SetStateAction<{
        error: string | null;
        success: boolean;
        data: string | null;
      }>
    >
  ) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, {
        userId,
        OTPValues,
      });

      if (response) {
        setDBResponse({
          error: response?.data.error,
          success: response?.data.success,
          data: response?.data.data,
        });
      }
    } catch (err: any) {
      setDBResponse({
        error: "Internal server error",
        success: false,
        data: null,
      });
    }
  };

  // ////////////////////////////
  // USER UPDATEPASSWORD API ////////////////////////////////
  // ///////////////////////////
  export const updatePassword = async (
    endpoint: string,
    userData: {},
    setDBResponse: React.Dispatch<
      React.SetStateAction<{
        error: string | null;
        success: boolean;
        data: string | null;
      }>
    >
  ) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, userData);

      if (response) {
        setDBResponse({
          error: response?.data.error,
          success: response?.data.success,
          data: response?.data.data,
        });
      }
    } catch (error) {
      setDBResponse({
        error: "Internal Server Error",
        success: false,
        data: null,
      });
    }
  };
}
