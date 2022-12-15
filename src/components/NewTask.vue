
<script setup>
import { useTaskStore } from "../stores/task"   
import { ref } from "vue";
import moment from "moment";

const taskStore = useTaskStore();
// variables para los valors de los inputs
const name = ref('');
const description = ref('');

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showErrorMessage = ref(false);

// const constant to save a variable that holds the value of the error message
const errorMessage = ref(null);

const emit = defineEmits(["taskToAdd"]);
const date = moment().format("ll");

// Arrow function para crear tareas.
const addTask = async() => {
    if (name.value.length === 0 || description.value.length === 0) {
        // Primero comprobamos que ningún campo del input esté vacío y lanzamos el error con un timeout para informar al user.
        showErrorMessage.value = true;
        errorMessage.value = 'The task title or description is empty';
        setTimeout(() => {
            showErrorMessage.value = false;
        }, 5000);
    } else {
       await taskStore.addTask(name.value, description.value);
        emit("taskToAdd")
        name.value = "";
        description.value = "";
    }

}

</script>
<template>
<section class="py-2 bg-blue-100 ">
    <div class="my-6 p-10 max-w-4xl mx-auto text-center animate__animated animate__fadeIn  ">
        <span
            class="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-300 font-medium rounded-full shadow-sm">TASK</span>
        <h2 class="mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"> Add a new Task
        </h2>
        <div class="text-lg md:text-xl  text-coolGray-500 font-medium my-4">
            <p class="add-task-text">
                Keep your life organized, prepare for a trip ? Start here
            </p>
            <p class="text-center mx-3">Today's Date is {{ date }}</p>
        </div>
        <div v-if="showErrorMessage">
            <p class="error-text text-gray-500">{{ errorMessage }}</p>
        </div>
        <div class="mb-6">
            <div class="flex flex-col px-4">
                <input class="inputField  mb-4" placeholder="Add a Task Title." type="text" name="name"
                    v-model="name">
                <input class="inputField mb-4 " placeholder="Add a Task Decription." type="text" name="description"
                    cols="300" rows="10" v-model="description">

                <button @click="addTask"
                    class="inline-block py-2 px-4 text-sm leading-5 text-blue-50 bg-blue-800 hover:bg-blue-700 font-medium focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 rounded-md">
                    Add
                </button>
            </div>
        </div>
    </div>
</section>
 
</template>


<style></style>
  