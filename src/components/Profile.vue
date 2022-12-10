<template>
    <h1> Welcome back, {{username}}</h1>
    <span>you can edit your profile</span>
    <img :src="avatar_url ? avatar_url : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'" alt="Profile picture">
  
</template>

<script setup>

</script>