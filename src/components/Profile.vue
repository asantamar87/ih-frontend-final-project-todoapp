<template>
    <!-- <h1> Welcome back, {{username}}</h1>
    <span>you can edit your profile</span>
    <img :src="avatar_url ? avatar_url : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'" alt="Profile picture"> -->

    <div class="container  mx-8 my-8  p-20">
        <h1>Welcome back, {{username}}</h1>
        
    </div>


  
</template>

<script setup>
import { ref } from 'vue';
// import { useUserStore } from "../stores/profile";

const username = getUser.email;
console.log(username);


const user = useUserStore



</script>