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
  

  <header class="bg-gray-900  sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-4">
    <div class="flex justify-between items-center w-full px-4 py-3 sm:p-0 ">
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

    <!-- RIGHT ELEMENTS -->
    <!-- hidden -->
      <!-- <div class=" lg:block lg:w-1/3">
        
        <div class=" flex items-center justify-end"> -->
  
          <div class="sm:hidden ">
            <button @click="(isOpen = !isOpen)" type="button"
              class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path v-if="isOpen" fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                <path v-if="!isOpen" fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>

      <!-- Nav Bar mobile extended -->
          <nav :class="isOpen ? 'block' : 'hidden '" class="flex justify-end  p-5 w-full ">
            <!-- <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Home</a> -->
            <h1 class=" text-white hover:text-blue-800 font-medium mr-10"> Welcome, {{ name[0] }}</h1>
           
            <router-link to="/" class=" block mr-4 text-white font-semibold rounded hover:bg-gray-800">
              <!-- Home -->
              <font-awesome-icon icon="fa-solid fa-house" />
            </router-link>
          
            <!-- <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Profile</a> -->
            <router-link to="/account" class="block mr-4 text-white font-semibold rounded hover:bg-gray-800">
              <!-- Account -->
              <font-awesome-icon icon="fa-solid fa-user-pen" />
            </router-link>
            <button @click="signOut" type="button" class="block mr-4 text-white font-semibold rounded hover:bg-blue-400">
              <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
            </button>
          
          </nav>
          </header>
</template>


<style>

</style>
