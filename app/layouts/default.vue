<script setup lang="ts">
import { authService } from "~/api/services/authService";

try {
  await authService.getMe();
} catch (error) {
  navigateTo("/auth?login=true");
}
</script>

<template>
  <div class="min-h-screen bg-slate-900 roboto text-white">
    <AppHeader />
    <div class="container">
      <slot />
    </div>
  </div>
</template>
