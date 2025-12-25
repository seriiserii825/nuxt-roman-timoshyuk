<script setup lang="ts">
  import { authService } from '~/api/services/authService'
  import useSweetAlert from '~/composable/useSweetAlert'
  import { LocalStorage } from '~/helpers/LocalStorage'

  definePageMeta({
    layout: 'login',
  })

  const route = useRoute()
  const login = route.query.login

  const is_login = ref(login === 'true')

  const form = ref({
    email: 'seriiburduja@gmail.com',
    password: '123456',
  })
  const onRegister = async () => {
    try {
      await authService.register(form.value)
      is_login.value = true
      useSweetAlert('success', 'Registration successful! Please log in.')
    } catch (error) {
      handleAxiosError(error)
    }
  }
  const onLogin = async () => {
    try {
      const {
        data: { access_token },
      } = await authService.login(form.value)
      LocalStorage.setItem('token', access_token)
      useSweetAlert('success', 'Login successful!')
      await navigateTo('/')
    } catch (error) {
      handleAxiosError(error)
    }
  }
</script>

<template>
  <div
    class="mx-auto mt-40 flex w-full max-w-md flex-col items-center justify-center py-6"
  >
    <h1 class="mb-6 text-3xl font-bold">
      {{ is_login ? 'Login' : 'Register' }}
    </h1>

    <div class="flex w-full flex-col gap-4 sm:w-96">
      <div class="flex flex-col gap-1">
        <FormInput
          v-model="form.email"
          name="custom_email"
          type="email"
          placeholder="Email"
        />
      </div>

      <div class="flex flex-col gap-1">
        <FormInput
          v-model="form.password"
          name="custom_password"
          type="password"
          placeholder="Password"
        />
      </div>

      <Btn
        v-if="!is_login"
        type="submit"
        variant="btn-info"
        @emit_click="onRegister"
        >Register</Btn
      >
      <Btn v-else-if="is_login" type="submit" @emit_click="onLogin">
        Login
      </Btn>
      <div class="mt-4 text-center">
        <a
          href="#"
          class="text-blue-500 hover:underline"
          @click.prevent="is_login = !is_login"
        >
          {{
            is_login
              ? "Don't have an account? Register"
              : 'Already have an account? Login'
          }}
        </a>
      </div>
      <div class="mt-4 text-center">
        <NuxtLink to="/">
          <button class="btn btn-success">Back to home</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
