<template>
  <div>
  
  
    <main class="h-max">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="min-h-screen flex items-center justify-center bg-gray-100 bg-scroll bg-center bg-cover px-2 sm:px-0" style="background-image: url('background.jpg')">
            <div class="max-w-md w-full space-y-8 bg-white border-2 border-indigo-700 rounded-md p-3 shadow-xl">
              <div class="mt-8 space-y-6">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label class="sr-only">Nazwa Pokoju</label>
                    <text-input placeholder='Nazwa pokoju do degustacji' type='text' v-model="name" id='name' />
                  </div>
                </div>
                  <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label class="sr-only">Nazwa Pokoju</label>
                    <text-input placeholder='Opis' type='text' v-model="description" id='description' />
                  </div>
                </div>
                <div>
                  <Button text='Stwórz pokój' v-on:click="createDegustation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>




  </div>
</template>


<script>

import Button from '../elements/Button.vue'
import TextInput from '../elements/TextInput.vue';
import { Degustation } from '@/models/Degustation';

export default{
  data(){
    return {
      name:'',
      description:''
    }
  },
  components:{Button, TextInput},
  methods:{
    async createDegustation(){
      var { data, err } = await this.$api.createDegustation(this.name, this.description);
       console.log(data);
      if(err == null){
        console.log(data);
        this.$router.push({name:'MainView'});
      }
    }
  }
}

</script>