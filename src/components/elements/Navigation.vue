<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 w-12" src="/beer.png" alt="Piwo" v-on:click="$router.push({name:'MainView'})">
          </div>
          <div class="ml-5 flex items-baseline space-x-4">
            <router-link to="/ratingcenter" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Centrum ocen</router-link>
            <router-link to="/invite" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Zaproszenia</router-link>
            <router-link to="/ratedbefore" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Moje oceny</router-link>
            <router-link to="/createDegustations"  class="bg-white text-gray px-3 py-2 rounded-md text-sm font-medium">Stwórz degustację</router-link>
            <router-link v-show="hasActiveDegustation" to="/processDegustation" class="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium">Kontynuuj degustację</router-link>
          </div>

        </div>
        <div class="flex justify-end">
          <user-status />
        </div>
      </div>
    </div>

  </nav>
</template>
<script>
  import UserStatus from './UserStatus.vue'
  import { mapGetters } from 'vuex';
  
  export default {
    components: {
      UserStatus
    },
    computed:{
      ...mapGetters(['hasActiveDegustation'])
    }
  }
</script>
