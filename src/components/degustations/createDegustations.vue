<template>
  <div>
  
  
    <main class="h-max">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="min-h-screen flex items-center justify-center bg-gray-100 bg-scroll bg-center bg-cover px-2 sm:px-0" style="background-image: url('background.jpg')">
            <div class="max-w-md w-full space-y-8 bg-white border-2 border-indigo-700 rounded-md p-3 shadow-xl">
              <h2 class="text-center mt-2 text-3xl font-extrabold text-gray-900">Stwórz degustację</h2>
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

                   <h4>Oceniane Produkty</h4>
                  <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li v-for="(p,index) in products" :key="index"  class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div class="w-0 flex-1 flex items-center">
                      <input class="pl-1 ml-2 flex-1 w-0 border rounded-md py-1 border-gray-400" placeholder="Piwo..." v-model="p.value" />
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <button href="#" class="font-medium text-indigo-600 hover:text-indigo-500" @click="removeProduct(index)">
                        Usuń
                      </button>
                    </div>
                  </li>
                  <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <button class="px-1 py-2 font-xl text-white bg-indigo-400 rounded" @click="addProduct">Dodaj produkt</button>
                  </li>
                </ul>

                  <h4>Oceniane Cechy</h4>
                  <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li v-for="(f,index) in features" :key="index"  class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div class="w-0 flex-1 flex items-center">
                      <input class="pl-1 ml-2 flex-1 w-0 border rounded-md py-1 border-gray-400" placeholder="Cecha..." v-model="f.value" />
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <button href="#" class="font-medium text-indigo-600 hover:text-indigo-500" @click="removeFeature(index)">
                        Usuń
                      </button>
                    </div>
                  </li>
                  <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <button class="px-1 py-2 font-xl text-white bg-indigo-400 rounded" @click="addFeature">Dodaj cechę</button>
                  </li>
                </ul>
                  <Button text='Stwórz degustację' v-on:click="createDegustation" />
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
      description:'',
      features:[{value:''}],
      products:[{value:''}]
    }
  },
  components:{Button, TextInput},
  methods:{
    addFeature(){
      this.features.push({value:''})
    },
    removeFeature(index){
      this.features.splice(index,1);
    },
    addProduct(){
      this.products.push({value:''})
    },
    removeProduct(index){
      this.products.splice(index,1);
    },
    async createDegustation(){
      var { data, err } = await this.$api.createDegustation(this.name, this.description);
       
      if(err == null){
        for(let feature of this.features)
        {
          
          if(feature.value != '')
            await this.$api.addFeature(data.id,feature.value)
        }

        for(let product of this.products)
        {
          if(product.value != '')
            await this.$api.addProduct(data.id,product.value)
        }

        this.$router.push({name:'MainView'});
      }
    }
  }
}

</script>