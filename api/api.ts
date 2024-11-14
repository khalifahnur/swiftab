import axios from "axios";
import { AuthData, AuthResponse, ErrorResponse } from "@/types";

const api = axios.create({
  baseURL: "http://192.168.100.50:3002/swiftab",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (data: AuthData): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>("/auth/user/SignIn", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "An error occurred");
  }
};

export const signUpUser = async (data: AuthData): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>("/auth/user/SignUp", data);
    return response.data;
  } catch (error: any) {
    if (error?.response) {
      console.error("Sign-up error details:", error.response);
      // Show a more specific error message
      const errorMessage =
        error?.response?.data?.message || "An error occurred during sign up.";
      throw new Error(errorMessage);
    } else {
      // response (network issues, etc.)
      console.error("Network error or no response:", error);
      throw new Error("Network error or no response from server.");
    }
  }
};
