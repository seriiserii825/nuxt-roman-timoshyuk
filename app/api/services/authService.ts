import type { IAuthPayload } from "~/interfaces/IAuthPayload";

export const authService = {
  login: async (payload: IAuthPayload) => {
    // Simulate an API call to authenticate the user
  },
  logout: () => {
    // Clear user session or token
  },
  register: async (payload: IAuthPayload) => {
    // Simulate an API call to register the user
  },
  getMe: async () => {
    // Simulate an API call to get the current user info
  },
};
