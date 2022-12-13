<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

import { useProfileStore } from '../stores/profile';


import Nav from '../components/Nav.vue';
import Avatar from '../components/Avatar.vue';
import Footer from '../components/Footer.vue';


const profileStore = useProfileStore();

const profiles = ref([]);

profileStore.fetchProfiles()

const getProfiles = async () =>{
  profiles.value = await profileStore.fetchProfiles();
}

getProfiles();

// async function updateProfile() {
//     try {
//         loading.value = true
//         const { user } = session.value
//         const updates = {
//             id: user.id,
//             username: username.value,
//             website: website.value,
//             avatar_url: avatar_url.value,
//             updated_at: new Date(),
//         }
//         let { error } = await supabase.from('profiles').upsert(updates)
//         if (error) throw error
//     } catch (error) {
//         alert(error.message)
//     } finally {
//         loading.value = false
//     }
// }


</script>

<template>
  <div class= "bg-blue-200">

    <Nav />
    <div class="flex justify-center my-10 ">
      <div class="block p-4 rounded-lg shadow-lg bg-white">
        <!--  @submit.prevent="updateProfile -->
        <form class="">
          <div class="form-group mb-6">
  
            <Avatar  size="30" />
  
          </div>
          <div class="form-group mb-6">
            <!-- <Avatar v-model:path="avatar_url" @upload="" size="10" /> -->
         
            <label for="email" class="form-label inline-block mb-2 text-gray-700">Username</label>
            <input id="email" type="text" class="form-control
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
              placeholder="Enter username" />
          </div>
  
  
           <div class="form-group mb-6">
  
            <label for="username" class="form-label inline-block mb-2 text-gray-700">Full Name</label>
            <input id="username" 
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
            type="text"
            placeholder="Enter full name"
            v-model="username" />
          </div>
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
            type="website" v-model="website" />
          </div>
  
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
        ease-in-out">Submit</button>
         
      </form>
    
      </div>
    
    </div>
    
    
    
    <Footer />
  </div>
</template>