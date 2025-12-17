import {authService} from "~/api/services/authService";
import {LocalStorage} from "~/helpers/LocalStorage";

export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuthStore();

  // already checked
  if (!auth.email) {
    return navigateTo("/auth?login=true");
  }

  try {
    await authService.getMe()
  } catch (error) {
    auth.reset();
    LocalStorage.clear()
    return navigateTo("/auth?login=true");
  }
});
