<script setup>
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';

//constant to save a variable that will hold the use router method
const route = "/";
const buttonText = "Todo app";

const user = useUserStore();

// constant to save a variable that will get the user from store with a computed function imported from vue
// const getUser = computed(() => useUserStore().user);
const getUser = useUserStore().user;

// constant that calls user email from the useUSerStore
const userEmail = getUser.email;

const name = userEmail.split("@")

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const redirect = useRouter();

const signOut = async () => {
  console.log("estoy aqui");
  try{
    // call the user store and send the users info to backend to signOut
    // then redirect user to the homeView
    await user.signOut();
    await redirect.push({ path: '/auth/login' });

  } catch (error) {
    console.log(error);
  }
};

const isOpen = ref(false)

window.addEventListener("resize",() => { 
  if(window.innerWidth > 640){
    isOpen.value = true} else{
      isOpen.value = false
    }
})

window.addEventListener("load", () =>{
  if(window.innerWidth > 640){
    isOpen.value = true} else{
      isOpen.value = false
    }
})

</script>

<template>
  <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex justify-between items-center w-full px-4 py-3 sm:p-0 ">
        <div class="xl:w-1/3 flex items-center justify-end">
          <a aria-current="page" href="/#" class="router-link-active router-link-exact-active">
            <img class="h-10 w-10" src="../assets/Things.png" alt="">
          </a>
      
          <div class=" py-2 px-4 bg-fixed text-blue-600 ">
            <h1 class="text-2xl font-bold mt-0 mb-2">Task App</h1>
          </div>
        </div>
  
      <div class="sm:hidden">
        <button @click="(isOpen =!isOpen)" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="flex justify-between p-6 px-4">
      <!-- <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Home</a> -->
      <router-link to="/" class=" w-full block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Home</router-link>

      <!-- <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Profile</a> -->
      <router-link to="/account" class=" w-full block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Account</router-link>

      <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a> 

      <button @click="signOut" class="block px-2 py-1 text-white font-semibold rounded hover:bg-red-800"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"/></svg> </button>

      <!-- <button @click="signOut" type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        
      </button> -->

<!--       
      <ul class="flex justify-between w-full">
        <li class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
          <p>Home</p>
        </li>
        <li class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
          <button @click="signOut" class="button">Log out</button>
        </li>
      </ul> -->

    </nav>
  </header>
  
  <!-- <nav class="flex justify-between p-6 px-4">
    <div class="flex justify-between items-center w-full">
      <div>
        <img
        class="h-10 w-10"
        src="../assets/Things.png"
        alt="">
        <h1 class="text-2xl font-bold mt-0 mb-2 text-blue-600">ToDo App</h1>
      </div>
      <div class="xl:w-1/3  navbar-collapse flex-grow items-center">
        <PersonalRouter :route="route" :buttonText="buttonText" class="logo-link" />
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto" >
          <li class="nav-item px-2">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item pr-2">

            
            <router-link to="/">Task Manager</router-link>
          </li>
  
          <li class="nav-item pr-2">

            <router-link to="/account">Your Account</router-link>
          </li>
        </ul>
      </div>
  
        <div>
          <ul>
            <li class="log-out-welcome">
              <p>Welcome</p>
            </li>
            <li>
              <button @click="signOut" class="button">Log out</button>
            </li>
          </ul>
        </div>
    </div>
  
  </nav> -->

  <!-- <nav class="flex justify-around p-6 px-4 bg-gray-900">
    <div class="flex justify-between items-center w-full">
      <div class="xl:w-1/3 flex items-center justify-end">
        <a aria-current="page" href="/#" class="router-link-active router-link-exact-active">
        <img
            class="h-10 w-10"
            src="../assets/Things.png"
            alt="">
        </a>
        
        <div class=" py-2 px-4 bg-fixed text-blue-600 ">
              <h1 class="text-2xl font-bold mt-0 mb-2">Task App</h1>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/3">
        <ul class="flex justify-center"></ul>
      </div>
      <div class="hidden lg:block lg:w-1/3">
        <div class="flex items-center justify-end">
          <h1 class="text-gray-500 hover:text-gray-900 font-medium mr-2"> Welcome back, {{name[0]}}</h1>
            <button  @click="signOut"  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"> Log Out </button>
        </div>
      </div>
    </div>
    <button class="navbar-burger self-center lg:hidden">
      <svg width="35" height="35" viewBox="0 0 32 32" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect class="text-gray-50" width="32" height="32" rx="6" fill="currentColor">

        </rect>
        <path class="text-gray-500"
          d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
          fill="currentColor">
        </path>
      </svg>
    </button>
  </nav>  -->


</template>


<style>

</style>
