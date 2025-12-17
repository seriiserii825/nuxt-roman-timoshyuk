import { authService } from "~/api/services/authService";
import { LocalStorage } from "~/helpers/LocalStorage";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();

  // already authenticated
  if (authStore.email) {
    return;
  }

  try {
    await authService.getMe();
  } catch (error) {
    return navigateTo("/auth?login=true");
  }
});
