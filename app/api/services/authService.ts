import type { IAuthPayload } from "~/interfaces/IAuthPayload";
const { $axios } = useNuxtApp();

const auth_store = useAuthStore();

export const authService = {
  login: async (payload: IAuthPayload): Promise<{ data: { access_token: string } }> => {
    return $axios.post("/auth/login", payload);
  },
  logout: () => {
    // Clear user session or token
  },
  register: async (payload: IAuthPayload): Promise<void> => {
    return $axios.post("/users", payload);
  },
  getMe: async () => {
    const response = await $axios.get("/auth/profile");
    auth_store.setEmail(response.data.email);
  },
};
