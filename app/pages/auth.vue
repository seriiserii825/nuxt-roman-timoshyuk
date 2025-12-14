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
          class="input"
          name="email"
          type="text"
          placeholder="email"
          v-model="form.email"
          fluid
          :ptOptions="{ mergeProps: true }"
          :pt="{ root: { autocomplete: 'off' } }"
        />
      </div>
      
      <div class="flex flex-col gap-1">
        <InputText
          class="input"
          name="password"
          type="password"
          placeholder="password"
          v-model="form.password"
          fluid
          :ptOptions="{ mergeProps: true }"
          :pt="{ root: { autocomplete: 'off' } }"
        />
      </div>
      
      <Button type="submit" class="bg-blue-700 text-white" label="Submit" @click="onFormSubmit" />
    </div>
  </div>
</template>
