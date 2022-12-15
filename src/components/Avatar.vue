<script setup>
import { ref, toRefs, watch } from 'vue'
import { supabase } from '../supabase'
import { useUserStore } from '../stores/user';

const userStore = useUserStore();
const users = ref([])

const prop = defineProps(['path', 'size', 'fullname', 'website'])
// ADD FULLNAME, WEBSITE OPTIONAL
const { path, size  } = toRefs(prop)
const emit = defineEmits(['upload', 'update:path'])
const uploading = ref(false)
const src = ref('')
const files = ref()




const downloadImage = async () => {
  console.log("Estoy dimg");  
  try {
        const { data, error } = await supabase.storage
            .from('avatars')
            .download(path.value)
        if (error) throw error
        src.value = URL.createObjectURL(data)
        
    } catch (error) {
        console.error('Error downloading image: ', error.message)
    }
}


const uploadAvatar = async (evt) => {
    files.value = evt.target.files
    try {
        uploading.value = true
        if (!files.value || files.value.length === 0) {
            throw new Error('You must select an image to upload.')
        }
        const file = files.value[0]
        const fileExt = file.name.split('.').pop()
        const filePath = `${Math.random()}.${fileExt}`
        let { error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(filePath, file)
        if (uploadError) throw uploadError
        emit('update:path', filePath)
        //emit('upload')
    } catch (error) {
        alert(error.message)
    } finally {
        uploading.value = false
    }
}

watch(path, () => {
    if (path.value) downloadImage()
    console.log('estoy en el watcher')
})



</script>

<template>

<div class="text-center">
  <img v-if="src" :src="src" alt="Avatar" class="rounded-full w-1/3 mb-4 mx-auto"/>
  
  <div >
    <label class="button primary block" for="single">
        {{ uploading ? "Uploading ..." : "Upload" }}
    </label>
    <input class="text-sm" style="hidden absolute" type="file" id="single" accept="image/*"
        @change="uploadAvatar" :disabled="uploading" />
</div>
<div class="my-6">
  <h5 class="text-3xl font-medium leading-tight mb-2">{{fullname}}</h5>
  <p class="text-gray-500">{{website}}</p>

</div>

</div>

</template>
  