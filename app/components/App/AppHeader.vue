<script setup lang="ts">
import useSweetAlert from "~/composable/useSweetAlert";
import { LocalStorage } from "~/helpers/LocalStorage";

const is_auth = useIsLoggedIn();
const auth_store = useAuthStore();

const is_menu_visible = ref(false);

function logout() {
  auth_store.setEmail(null);
  LocalStorage.removeItem("token");
  useSweetAlert("success", "Logout successful!");
  navigateTo("/auth?login=true");
}
</script>

<template>
  <div class="flex items-center gap-4 bg-gray-800 px-8 py-4 text-white">
    <NuxtLink to="/" class="mr-auto"
      ><font-awesome-icon icon="fa-solid fa-bitcoin-sign"
    /></NuxtLink>
    <nav
      v-if="is_auth"
      class="ml-auto flex items-center gap-6 text-white/50 sm:hidden"
      :class="{ hidden: !is_menu_visible }"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/categories">Categories</NuxtLink>
      <NuxtLink to="/transactions">Transactions</NuxtLink>
    </nav>
    <!-- Мобильное меню -->
    <nav
      v-if="is_auth && is_menu_visible"
      class="fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center gap-4 bg-gray-800 p-4 text-white/50"
    >
      <NuxtLink to="/" @click="is_menu_visible = false">Home</NuxtLink>
      <NuxtLink to="/categories" @click="is_menu_visible = false"
        >Categories</NuxtLink
      >
      <NuxtLink to="/transactions" @click="is_menu_visible = false"
        >Transactions</NuxtLink
      >
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
    <div
      class="relative z-20 hidden sm:block"
      @click="is_menu_visible = !is_menu_visible"
    >
      <font-awesome-icon icon="fa-solid fa-bars" v-if="is_auth" />
    </div>
  </div>
</template>
