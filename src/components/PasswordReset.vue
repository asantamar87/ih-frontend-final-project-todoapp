<script setup>

import { ref } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { useRouter } from 'vue-router';

const route = "/auth/login";
const buttonText = "Sign in";


// const user = almacenAuth()
const password = ref('')

const redirect = useRouter();


</script>

<template>

<!-- ////////// Actualizar Contraseña ////////// -->
  <!-- <main class="w-full sm:w-1/2 xl:w-1/3">
    <div class="border-teal p-8 border-t-12 mb-6 rounded-lg shadow-lg bg-white">
      <div class="mb-4">
        <label class="font-bold text-grey-darker block mb-2">Contraseña</label>
        <input
          type="password"
          class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
          placeholder="Tú contraseña"
          v-model="(password)"
        />
      </div>

      <div class="flex flex-col gap-2">
        <a @click="user.handleUpdateUser({password: password})" href="#" class="btn btn-accent" tabindex="0">
          Actualizar contraseña
        </a>
      </div>
    </div>
  </main> -->

  
<div class=" bg-blue-200 ">
    <header>
      <div class="bg-fixed">
        <div class="flex justify-center items-center">
          <div class="text-center text-blue-600 px-6 md:px-12 sm:px-12 mt-5">
            <h1 class="text-6xl font-bold mt-0 mb-2">Task App</h1>
            <h3 class="text-3l font-bold mb-6">Start organizing your tasks!</h3>
          </div>
        </div>
      </div>
    </header>
  <!-- h-full -->
    <section class="bg-slate-400 p-8 md:h-screen">
      <!-- px-6 h-full -->
      <div class=" text-gray-800 ">
        <div class="p-4  flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-5/12 lg:w-6/12 md:w-6/12 mb-12 md:mb-0">
            <img 
            src="../assets/logo.png" 
            class="w-full" 
            alt="Task image" />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
  
          <!-- FORM SIGN IN  -->
            
            <form @submit.prevent="signIn" class="form-sign-in">
              <div class="flex flex-row items-center justify-center lg:justify-start">
                <p class=" text-3l font-bold mb-6">Reset your password</p>
              </div>
  
  
              <!-- Email input -->
              <div class="mb-6">
                <label class="input-field-label">E-mail</label>
                <input type="email"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email" placeholder="Email address" 
                  v-model="email"
                  required />
              </div>
  
              <!-- Password input -->
              <div class="mb-6">
                <label class="input-field-label">Password</label>
                <input type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password" placeholder="Password" 
                  v-model="password"
                  required />
              </div>
  

              <!-- BUtton Recovery -->
              <div class="text-center lg:text-left flex justify-center items-center flex-col">
                <button
                aria-label="Need Account"
                type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Reset Password
                </button>
              
                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account? 
                    <PersonalRouter :route="route" :buttonText="buttonText" class=" text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  
  </div>
</template>