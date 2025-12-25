import { authService } from '~/api/services/authService'

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore()

  // already authenticated
  if (authStore.email) {
    return
  }

  try {
    await authService.getMe()
  } catch (error: unknown) {
    console.error('Auth middleware error:', error)
    return navigateTo('/auth?login=true')
  }
})
