<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-12 w-12" src="/beer.png" alt="Piwo">
            </div>
            <div class="ml-5 flex items-baseline space-x-4">
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Centrum ocen</a>
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Zaproszenia</a>
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Moje oceny</a>
              <a href="/Dashboard"  class="bg-white text-gray px-3 py-2 rounded-md text-sm font-medium">Tablica</a>
            </div>

          </div>
        </div>
      </div>

    </nav>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Degustacja<br>
        </h1>
      </div>
    </header>
    <main class="h-max">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <div class="d-flex flex-column mb-6">
              <div class="flex justify-center">Eluwina</div>
              <p class="flex justify-center">Eluwina</p>
            </div>
            <div>
              <Button text='Start' v-on:click="start" />
            </div>
          </div>
        </div>
      </div>
    </main>




  </div>
</template>


<script>

import Button from './elements/Button.vue'
import TextInput from './elements/TextInput.vue';
import { Degustation } from '@/models/Degustation';

export default {
  data(){
    return {}
  },
  components:{Button},
  methods:{
    start(){
    this.$router.push({name:"Rating"});
    } 
  }
  

}

</script>