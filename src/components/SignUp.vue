<template>
<div class="m-6">
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
  <section class="p-8 md:h-screen">
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

            <!-- FORM SIGN UP -->
            <form @submit.prevent="signUp" class="form-sign-in">

              <div
                class="flex items-center m-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0">Register</p>
              </div>

              <!-- Email input -->
              <div class="mb-6">
               <label class="input-field-label">E-mail</label>

                <input type="email"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email" placeholder="Email address" v-model="email" 
                  required />
              </div>
              <!-- Password 1 input -->
              <div class="mb-6">
              <label class="input-field-label">Password</label>
                <input type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password" placeholder="Contraseña"
                  v-model="password"
                  required />
              </div>

              <!--Confirm Password  input -->
              <div class="mb-6">
          <label class="input-field-label">Confirm password</label>

                <input type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="confirmPassword" placeholder="Repita la contraseña"
                  v-model="confirmPassword"
                   required />
              </div>

              <div class="text-center lg:text-left flex justify-center items-center flex-col">
                <button type="submit"
                  class=" inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Sign Up
                </button>
                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                  Have an account?
                  <PersonalRouter :route="route" :buttonText="buttonText"
                    class=" text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out" />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>


    <div v-show="errorMsg">{{ errorMsg }}</div>

  </div>

</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

import Swal from 'sweetalert2'


// Route Variables
const route = "/auth/login";
const buttonText = "Sign In";

// Input Fields
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Error Message
const errorMsg = ref("");

// Router to push user once SignedUp to Log In
const redirect = useRouter();

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = async () => {
  if (password.value === confirmPassword.value) {
    try {
      // calls the user store and send the users info to backend to logIn
      await useUserStore().signUp(email.value, password.value);
      // redirects user to the homeView
      Swal.fire('Revisa tu e-mail','','success')
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      // displays error message
      errorMsg.value = error.message;
      // hides error message
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "error password";
  // alert("Las dos contraseñas no coinciden");
  Swal.fire('Contraseñas no coinciden','','error')

};


</script>

<style>

</style>
