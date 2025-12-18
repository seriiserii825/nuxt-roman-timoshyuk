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
  <div class="flex items-center justify-between gap-4 px-8 py-4 bg-gray-800 text-white">
    <NuxtLink to="/"><i class="pi pi-bitcoin" style="font-size: 1.8rem"></i></NuxtLink>
    <nav v-if="is_auth" class="flex items-center text-lg gap-6 ml-auto text-white/50">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/categories">Categories</NuxtLink>
      <NuxtLink to="/transactions">Transactions</NuxtLink>
    </nav>
    <div v-if="is_auth">
      <Button
        @click="logout"
        label="Logout"
        icon="pi pi-sign-out"
        severity="help" />
    </div>
    <div v-else>
      <NuxtLink to="/auth?login=true">
        <Button class="btn" label="Login" icon="pi pi-sign-in" severity="help" />
      </NuxtLink>
      <NuxtLink to="/auth?login=false">
        <Button class="btn btn-info ml-2" label="Register" icon="pi pi-user-plus" severity="info" />
      </NuxtLink>
    </div>
  </div>
</template>
