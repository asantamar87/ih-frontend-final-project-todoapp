<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

import { useUserStore } from '../stores/user';


import Nav from '../components/Nav.vue';
import Avatar from '../components/Avatar.vue';
import Footer from '../components/Footer.vue';

const userStore = useUserStore();
const users = ref([])

// Input Fields
const username = ref("");
const fullname = ref("");
const avatar_url = ref("");
const website = ref("");


const updateProfile = async () =>{
  users.value = await userStore.updateUser(username.value, fullname.value, avatar_url.value,website.value)
  console.log("Datos actualizados correctamente");
}

const props = defineProps({
    user: Object
});

const setup = async () => {
  await userStore.fetchUser();
  username.value = userStore.profile.username;
}

setup();
</script>

<template>
  <div class= "bg-blue-200">

    <Nav />
    <div class="flex justify-center my-10 ">
      <div class="block p-4 rounded-lg shadow-lg bg-white">

        <!-- FORM START -->
        <form  @submit.prevent="updateProfile"  class="">
          <div class="form-group mb-6">
            <!-- <Avatar size="30" /> -->
            <Avatar v-model:path="avatar_url" @upload="" size="15" /> 
          </div>

            <!-- PROFILE - Username -->
          <div class="form-group mb-6">         
            <label for="email" class="form-label inline-block mb-2 text-gray-700">Username</label>
            <input :placeholder="username" 
            id="email" type="text" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-describedby="emailHelp"
            
              v-model="username"
              required
              />
          </div>
  
  
          <!-- PROFILE - Fullname -->
          <div class="form-group mb-6">
            <label for="username" class="form-label inline-block mb-2 text-gray-700">Full Name</label>
            <input id="username" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="text"
              placeholder="Enter full name"
               v-model="fullname" 
              required
              />
          </div>

          <!-- PROFILE - Website -->
          <div class="form-group mb-6">
            <label for="website" class="form-label inline-block mb-2 text-gray-700">Website</label>
            <input id="website" 
            class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Enter your website"
          type="website" 
            v-model="website"
            required
            />
          </div>

          <!-- PROFILE - SUBMIT -->
          <button type="submit" class="
              w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out">
              Submit
            </button>
         
      </form>
    <!-- FORM END -->
      </div>
    
    </div>
    
    
    
    <Footer />
  </div>
</template>