<script setup>
import { ref, computed } from 'vue';
import { useTaskStore } from '../stores/task';
import { supabase } from '../supabase';
import Swal from 'sweetalert2'

import moment from "moment";

const taskStore = useTaskStore();

const emit = defineEmits(["getTasks"])
const toggle = ref(false);

const showInp = () => {
  toggle.value = true;
}

const newTitle = ref("");
const newDescription = ref("");

// Function to delete task.
const deleteTask = async (id) => {
  const { isConfirmed } = await Swal.fire({
    title: '¿Está seguro?',
    text: 'Una vez borrado, no se puede recuperar',
    showDenyButton: true,
    confirmButtonText: 'Si, estoy seguro'
  })

  if (isConfirmed) {
    new Swal({
      title: 'Espere por favor',
      allowOutsideClick: false
    })
    Swal.showLoading()
    await taskStore.deleteTask(id);
    emit("getTasks")
    Swal.fire('Eliminado', '', 'success')
  }
};


const toggleTask = async(id,bool) => {
await taskStore.toggleTask(id,bool);
await taskStore.fetchTasks();
!props.task.is_complete?  Swal.fire('Tarea Completada','','success') : Swal.fire('Tarea incompleta','','warning')
emit("getTasks")

}

const replaceButton = async (id) => {
  await taskStore.editTask(newTitle.value, newDescription.value, id);
  await taskStore.fetchTasks();
  toggle.value = !toggle.value;
  emit("getTasks")
};

const props = defineProps({
    task: Object
});

</script>
<template>
  <div class="my-8">
    <div class="block p-10 m-4 rounded-lg shadow-lg bg-blue-100 max-w-sm sm:px-4" >
    <!-- GROUP OF TASKS -->
    <div class="group h-full mt-10">
      <div class="group relative h-full px-2  pb-1 bg-white rounded-md shadow-md hover:shadow-xl transition duration-200">
        <div class="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center bg-white rounded-full transition duration-200">
          <div :class="task.is_complete ? 'bg-green-600' : 'bg-red-400'"
            class="inline-flex items-center justify-center w-12 h-12 text-white rounded-full p-3">
            <font-awesome-icon icon="fa-solid fa-clipboard-check" />
          </div>
        </div>
      </div>
    </div>

    <!-- EDIT CHANGES -->
    <div class="flex flex-col m-2">
      <!-- Print old title before edit -->
      <h5 v-if="!toggle" class="text-gray-900 text-xl leading-tight font-medium mb-2 mt-8">{{ task.title }}</h5>
      <!-- Recive a new value for title, show a old title on placeHolder-->
      <input v-else type="text" name="" id="" :placeholder="task.title" v-model="newTitle" class="my-10" />
      <!-- Print old description before edit -->
      <p v-if="!toggle" class="text-gray-700 text-base mb-4">{{ task.description }}</p>
      <!-- INSERT DATE -->
      <p v-if="!toggle" class="text-gray-400 text-base mb-4"> Date: {{moment(task.inserted_at).format('llll') }}</p>
      <!-- Recive a new value for description, show a old description on placeholder-->
      <textarea v-if="toggle" name="" id="" cols="20" rows="6" :placeholder="task.description"
        v-model="newDescription"></textarea>

    </div>

    <!-- SAVE CHANGES -->
    <button aria-label="Save changes" v-if="toggle" @click="replaceButton(task.id)"
      class="inline-block px-6 m-10  py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><font-awesome-icon
        icon="fa-solid fa-floppy-disk" />
    </button>

    <button aria-label="Cancel edit" v-if="toggle" @click="toggle = false"
      class="inline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"><font-awesome-icon
        icon="fa-solid fa-xmark" />
    </button>
    <!-- Add icon to replace completed -->

    <!-- TASK COMPLETED -->
    <button aria-label="Task completed"
      :class="task.is_complete ? 'noToggle' : 'showToggle  && bg-black-200 text-gray-400 border-red-600'" v-if="!toggle"
      @click="toggleTask(task.id, !task.is_complete)" type="button"
      class=" inline-block m-1 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-m hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-00 active:shadow-lg transition duration-150 ease-in-out">
      {{ task.is_complete ? "" : "" }}
      <!-- <font-awesome-icon icon="fa-solid fa-check" /> -->
      <font-awesome-icon icon="fa-solid fa-check" />
    </button>

    <!-- TASK EDIT -->
    <button aria-label="Task edit" v-if="!toggle" @click="showInp" type="button"
      class=" inline-block m-1 px-6 py-2.5 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">
      <font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>

    <!-- TASK DELETE -->
    <button aria-label="Task deleted" @click="deleteTask(task.id)" v-if="!toggle" type="button"
      class=" inline-block m-1 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
      <font-awesome-icon icon="fa-solid fa-trash-can" />

    </button>
  </div>
</div>
</template>

<style></style>
