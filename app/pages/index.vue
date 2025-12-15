<script setup lang="ts">
const triggerError = () => {
  // showError({
  //   statusCode: 500,
  //   statusMessage: "Internal Server Error",
  //   message: "An unexpected error occurred.",
  // });
};
</script>

<template>
  <Button @click="triggerError" class="mt-8">Trigger Error</Button>
</template>
