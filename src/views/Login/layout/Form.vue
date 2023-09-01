<script setup>
import ButtonPrimary from '@/components/Button/ButtonPrimary.vue'
import ButtonSecondaryIcon from '@/components/Button/ButtonSecondaryIcon.vue'
</script>

<template>
  <div>
    <img src="/images/logo/Logo.png" class="w-32 mx-auto" alt="logo" />
  </div>
  <div class="flex flex-col mt-12 items-center">
    <div class="flex-1 w-full mt-8 max-w-lg">
      <div class="flex flex-col items-start mb-10">
        <h1 class="text-2xl font-bold xl:text-3xl">Account Login</h1>
        <p class="mt-5 text-md text-gray-400 xl:text-xl">
          If you are already a member you can login with your email address and password.
        </p>
      </div>

      <!-- Form -->
      <div class="mx-auto">
        <label>Email</label>
        <input
          class="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-2 mb-5"
          type="email"
          placeholder="Email"
        />
        <label>Password</label>
        <input
          class="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
          type="password"
          placeholder="Password"
        />
        <ButtonPrimary title="Login" to="/" />

        <div class="my-12 text-center border-b">
          <div
            class="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white"
          >
            Or sign up with Google
          </div>
        </div>

        <div class="flex flex-col items-center">
          <!-- Button Sign in with google -->
          <ButtonSecondaryIcon title="Sign In With Google" icon="flat-color-icons:google" to="/" />
        </div>
      </div>

      <p class="text-center mt-5 text-sm">
        Don’t have an account ?
        <RouterLink to="/register" class="text-yellow-500"> Register here </RouterLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLayout'
}
</script>
