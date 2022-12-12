<template>
    <!-- <h1>Add a new Task</h1> -->
  
    <!-- <div>
        <div v-if="showErrorMessage">
            <p class="error-text">{{ errorMessage }}</p>
        </div>
        <div class="input-field">
            <input type="text" placeholder="Add a Task Title - Listen to Kendrick Lamar" v-model="name">
        </div>
        <div class="input-field">
            <input type="text" placeholder="Add a Task Description - Look up Kendrick Lamar's FEAR album on spotify and listen to the whole album." v-model="description">
        </div>
        <button @click='addTask' class="button">Add</button>
    </div> -->


    
    
    <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->


<!-- PERFECTA -->
<section class="py-2 bg-blue-100 " >
    <div class="my-12 p-10 max-w-4xl mx-auto text-center animate__animated animate__fadeIn  ">
        <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-300 font-medium rounded-full shadow-sm">TASK</span>
        <h2 class="mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"> Add a new Task </h2>
        <div class="text-lg md:text-xl  text-coolGray-500 font-medium my-4">
            <p class="add-task-text">
              Keep your life organized, prepare for a trip ? Start here
            </p>
            <p class="text-center mx-3">Today's Date is {{date}}</p>
        </div>
        <div class="mb-6">
            <div class="flex flex-col px-4">
                <input class="inputField mb-4" placeholder="Add a Task Title - Listen to Kendrick Lamar" type="text"
                    name="newTodo" id="name">
                <input class="inputField mb-4"
                    placeholder="Adda a Task Decription - Look up Kendrick Lamar's FEAR album on spotify and listen to the whole album."
                    type="text" name="newDescription" id="description">

                <button @click="addTask" class="inline-block py-2 px-4text-sm leading-5 text-blue-50 bg-blue-800 hover:bg-blue-700 font-medium focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 rounded-md">Add</button>
            </div>

        </div>
    </div>


</section>
 
    <!-- <hr/> -->


    <!-- <section class="py-10 bg-gray-100 " >
        <div class="container px-4 mx-auto">
            <div class="max-w-4xl mx-auto text-center animate__animated animate__fadeIn">
                <h2 class="mb-4 my-10 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"> Add a new Task </h2>
                <div class="text-lg md:text-xl text-coolGray-500 font-medium my-4">
                    <p class="add-task-text">
                      Keep your life organized, prepare for a trip ? Start here
                    </p>
                    <p class="text-center mx-3">Today's Date is {{date}}</p>
                  </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white w-full">
                        <div class="max-w-xl mx-auto text-center animate__animated animate__fadeIn">
                            <span class="inline-block p-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium rounded-full shadow-sm">
                                <img
                                class="h-10 w-10"
                                src="../assets/tasks_icon.png"
                                alt="">
                                
                            </span>
                            <div class="my-16">
                                <div v-if="showErrorMessage">
                                    <p class="error-text">{{ errorMessage }}</p>
                                </div>
                                   
                                    <div class="flex flex-col px-2 w-full">
                                        <input class="inputField  mx-4 my-4" placeholder="Add a Task Title." type="text"
                                        name="name" 
                                        v-model="name">

                                        <input class="inputField mx-4 my-4 "
                                        placeholder="Add a Task Decription."
                                        type="text" name="description"
                                        cols="300" rows="10" 
                                        v-model="description">
                                
                                    <button @click="addTask" 
                                    class="inline-block py-2 px-4 text- leading-5 text-blue-50 bg-blue-800 hover:bg-blue-700 font-medium focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 rounded-md">
                                    Add
                                    </button>
                                </div>
                            </div>

                    
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        
    </section>  -->

    <!-- WETAG -->
    <!-- <div class="backgroundNewTask m-auto mt-20 w-3/6 py-10 px-10">
        <div class="flex justify-around">
          <div class="">
            <span></span>
            <h2 class="font-sans text-6xl mt-5 mb-10 flex justify-center font-bold" >Add a new Task</h2>
            <h3 class="font-sans text-2xl mt-5 mb-10 flex justify-center font-bold">
              Keep your life organized. Start here Today's Date
              is Dec 09th 2022
            </h3>
          </div>
        </div>
    
        
      </div>
       <div class="flex m-auto ">
          <div class="flex justify-between mt-5 mb-15">
            <div v-if="showErrorMessage">{{ errorMessage }}</div>
    
            <input
              class="px-2 py-2 m-8 borderInput border-green-400"
              type="text"
              placeholder="Add a Task Title"
              v-model="name"
            />
            <input
              class="px-2 py-2 m-8 borderInput border-green-400"
              type="text"
              placeholder="Add a Taks Description"
              v-model="description"
            />
            
    
          
          </div>
    
          <div class="my-auto">
              <button
                @click="toAdd"
                class="inline-block p-4 mt-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add
              </button>
            </div>
        </div> -->
</template>

<script setup>
import { useTaskStore } from "../stores/task"   

import PersonalRouter from "./PersonalRouter.vue";
import { ref, computed } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

//importamos libreria moment.js que previamente habiamos instalado con npm install moment --save
import moment from "moment";
//guardamos en una varibale la funcion predeterminada por moment y lo mostramos en el html con el sintaxis bigotes
const date = moment().format("ll");
console.log(date);


// variables para los valors de los inputs
const name = ref('');
const description = ref('');



// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showErrorMessage = ref(false);

// const constant to save a variable that holds the value of the error message
const errorMessage = ref(null);

const emit = defineEmits(["taskToAdd"]);

const taskStore = useTaskStore();

// Arrow function para crear tareas.
const addTask = async() => {
    console.log("entrada");
    if (name.value.length === 0 || description.value.length === 0) {
        // Primero comprobamos que ningún campo del input esté vacío y lanzamos el error con un timeout para informar al user.
        showErrorMessage.value = true;
        errorMessage.value = 'The task title or description is empty';
        setTimeout(() => {
            showErrorMessage.value = false;
        }, 5000);
    } else {
        // Aquí mandamos los valores a la store para crear la nueva Task. Esta parte de la función tenéis que refactorizarla para que funcione con emit y el addTask del store se llame desde Home.vue.
       await taskStore.addTask(name.value, description.value);
   
        console.log("Launch emit");
        emit("taskToAdd")
        name.value = "";
        description.value = "";
    }

 
}



</script>

<style></style>
  