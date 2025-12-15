<script setup lang="ts">
import { authService } from "~/api/services/authService";
import { LocalStorage } from "~/helpers/LocalStorage";

definePageMeta({
  layout: "login",
});

const route = useRoute();
const login = route.query.login;

const is_login = ref(login === "true");

const form = ref({
  email: "seriiburduja@gmail.com",
  password: "123456",
});
const onRegister = async () => {
  try {
    await authService.register(form.value);
    is_login.value = true;
  } catch (error) {
    handleAxiosError(error);
  }
};
const onLogin = async () => {
  try {
    const {
      data: { access_token },
    } = await authService.login(form.value);
    LocalStorage.setItem("token", access_token);
    await navigateTo("/");
  } catch (error) {
    handleAxiosError(error);
  }
};
</script>

<template>
  <div class="mt-40 flex flex-col justify-center items-center py-6">
    <h1 class="text-3xl font-bold mb-6">
      {{ is_login ? "Login" : "Register" }}
    </h1>

    <div class="flex flex-col gap-4 w-full sm:w-96">
      <div class="flex flex-col gap-1">
        <InputText
          v-model="form.email"
          class="input"
          name="custom_email"
          type="email"
          placeholder="Email" />
      </div>

      <div class="flex flex-col gap-1">
        <InputText
          class="input"
          name="custom_password"
          type="text"
          placeholder="Password"
          v-model="form.password" />
      </div>

      <Button
        v-if="!is_login"
        type="submit"
        class="btn btn-info"
        label="Submit"
        @click="onRegister" />
      <Button v-else type="submit" class="btn btn-info" label="Submit" @click="onLogin" />
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-500 hover:underline" @click.prevent="is_login = !is_login">
          {{ is_login ? "Don't have an account? Register" : "Already have an account? Login" }}
        </a>
      </div>
      <div class="mt-4 text-center">
        <NuxtLink to="/">
          <Button
            class="btn btn-success"
            label="Back to Home"
            icon="pi pi-home"
            severity="secondary" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
