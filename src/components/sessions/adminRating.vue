<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 bg-scroll bg-center bg-cover px-2 sm:px-0" style="background-image: url('background.jpg')">
    <div class="max-w-md w-full space-y-8 bg-white border-2 border-indigo-700 rounded-md p-3 shadow-xl">
      <div>
        <img class="mx-auto h-24 w-auto" src="/beer.png">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {{ name }}
          {{ invite_key }}
        </h2>
      </div>

      <div class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px ml-10 mr-10">
          <div class="pb-10">
            <p class="flex justify-center">Wygląd</p>
            <vue-slider v-model="look"
                        :min=min
                        :max=max
                        :adsorb="true"
                        :interval="1"
                        :marks="true"/>
          </div>
          <div class="pb-10">
            <p class="flex justify-center">Smak</p>
            <vue-slider v-model="taste"
                        :min=min
                        :max=max
                        :adsorb="true"
                        :interval="1"
                        :marks="true"/>
          </div>
          <div class="pb-10">
            <p class="flex justify-center">zapach</p>
            <vue-slider v-model="smell"
                        :min=min
                        :max=max
                        :adsorb="true"
                        :interval="1"
                        :marks="true"/>
          </div>
          <div class="pb-20">
            <p class="flex justify-center">Ocena ogólna</p>
            <vue-slider v-model="value"
                        :min=min
                        :max=max
                        :adsorb="true"
                        :interval="1"
                        :marks="true"/>
          </div>
        </div>

        <div>
          <Button text='Dalej' v-on:click="next" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Button from './elements/Button.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  data(){
    return {
      min:1,
      max:5,
      name:"#Nazwa piwerka",
      invite_key: '',
      look: 0,
      taste: 0,
      smell: 0,
      value: 0
    }
  },
  components: {
    Button,
    VueSlider
  }
}
</script>