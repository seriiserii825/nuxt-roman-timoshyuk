<script setup lang="ts">
definePageMeta({
  layout: "login",
});
const is_login = ref(false);
const form = ref({
  email: "",
  password: "",
});
const onFormSubmit = (values: Record<string, any>) => {
  console.log("Form submitted with values:", values);
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

      <Button type="submit" class="btn btn-info" label="Submit" @click="onFormSubmit" />
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-500 hover:underline" @click.prevent="is_login = !is_login">
          {{ is_login ? "Don't have an account? Register" : "Already have an account? Login" }}
        </a>
      </div>
    </div>
  </div>
</template>
