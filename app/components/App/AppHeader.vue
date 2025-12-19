<script setup lang="ts">
import useSweetAlert from "~/composable/useSweetAlert";
import { LocalStorage } from "~/helpers/LocalStorage";

const is_auth = useIsLoggedIn();
const auth_store = useAuthStore();

function logout() {
  auth_store.setEmail(null);
  LocalStorage.removeItem("token");
  useSweetAlert("success", "Logout successful!");
  navigateTo("/auth?login=true");
}
</script>

<template>
  <div
    class="flex items-center justify-between gap-4 bg-gray-800 px-8 py-4 text-white"
  >
    <NuxtLink to="/"
      ><i class="pi pi-bitcoin" style="font-size: 1.8rem"></i
    ></NuxtLink>
    <nav v-if="is_auth" class="ml-auto flex items-center gap-6 text-white/50">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/categories">Categories</NuxtLink>
      <NuxtLink to="/transactions">Transactions</NuxtLink>
    </nav>
    <div v-if="is_auth">
      <Btn @click="logout" variant="btn-danger">
        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
        Logout
      </Btn>
    </div>
    <div v-else>
      <NuxtLink to="/auth?login=true">
        <Btn>Login</Btn>
      </NuxtLink>
      <NuxtLink to="/auth?login=false">
        <Btn variant="btn-info">Register</Btn>
      </NuxtLink>
    </div>
  </div>
</template>
