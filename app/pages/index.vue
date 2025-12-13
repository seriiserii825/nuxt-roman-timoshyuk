<script setup lang="ts">
const triggerError = () => {
  showError({
    statusCode: 500,
    statusMessage: 'Internal Server Error',
    message: 'Something went wrong!'
  })
}
</script>

<template>
  <div class="index-page">
    <h1>Welcome to the Index Page</h1>
    <p class="text-lg">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate saepe optio
      perferendis temporibus ipsa placeat nesciunt. Quas corrupti architecto iste beatae labore,
      dolorum molestiae, nesciunt, impedit vero tempora minus!
    </p>
    <Button label="Trigger Error" icon="pi pi-exclamation-triangle" severity="danger" @click="triggerError" class="mt-4" />
  </div>
</template>
