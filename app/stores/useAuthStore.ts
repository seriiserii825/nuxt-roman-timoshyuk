export const useAuthStore = defineStore("auth", () => {
  const email = ref<string | null>(null);
  function setEmail(newEmail: string | null) {
    email.value = newEmail;
  }
  return { email, setEmail };
});
