import type { IAuthPayload } from "~/interfaces/IAuthPayload";
import { axiosInstance } from "../axiosInstance";

export const authService = {
  login: async (payload: IAuthPayload): Promise<{ data: { access_token: string } }> => {
    return axiosInstance.post("/auth/login", payload);
  },
  logout: () => {
    // Clear user session or token
  },
  register: async (payload: IAuthPayload): Promise<void> => {
    return axiosInstance.post("/users", payload);
  },
  getMe: async () => {
    // Simulate an API call to get the current user info
  },
};
