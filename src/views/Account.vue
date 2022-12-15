<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs, computed} from 'vue'

import { useUserStore } from '../stores/user';

import Nav from '../components/Nav.vue';
import Avatar from '../components/Avatar.vue';
import Footer from '../components/Footer.vue';
import Swal from 'sweetalert2'

const userStore = useUserStore();
const users = ref([])

// Input Fields
const username = ref("");
const fullname = ref("");
const avatar_url = ref("");
const website = ref("");

const name = computed(() => {
  if(userStore.profile) return userStore.profile.fullname});


const  getProfile =  async() => {
  try {
    
    await userStore.fetchUser()
    const profile = userStore.profile
    console.log(profile);
    username.value = profile.username
    fullname.value = profile.fullname
    website.value = profile.website
    avatar_url.value = profile.avatar_url

  } catch (error) {
    alert(error.message)
  }

  }

  getProfile();

const updateProfile = async () =>{
  users.value = await userStore.updateUser(username.value, fullname.value, avatar_url.value,website.value)
  Swal.fire('Guardado','Datos actualizados correctamente','success')
  console.log("Datos actualizados correctamente");
  await userStore.fetchUser()
  // getProfile();
}

const props = defineProps({
    user: Object
});

// const setup = async () => {
//   await userStore.fetchUser();
//   username.value = userStore.profile.username;
//   fullname.value = userStore.profile.fullname;
//   website.value = userStore.profile.website;
// }

// setup();
</script>

<template>
  <div class= "bg-blue-200">
    <Nav />
    <div class="flex justify-center my-10 ">
      <div class="block p-10 rounded-lg shadow-lg bg-blue-400 ">

        <!-- FORM START -->
        <form  @submit.prevent="updateProfile">
          <div class="form-group mb-6">
            <!-- <Avatar size="30" /> -->
            <Avatar v-model:path="avatar_url" :fullname="name" :website="website" @upload="updateProfile" size="10" />
            <!-- <Avatar v-model:path="avatar_url" @upload="" size="15" />   -->
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
                    text-gray-400
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
                    text-gray-400
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="text"
              :placeholder="fullname"
              
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
          text-gray-400
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