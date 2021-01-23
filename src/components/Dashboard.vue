<template>
<div>
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="h-12 w-12" src="beer.png" alt="Piwo" v-on:click="$router.push({name:'MainView'})">
                    </div>
                    <div class="ml-5 flex items-baseline space-x-4">
                        <router-link to="/RatingCenter" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Centrum ocen</router-link>
                        <router-link to="/invite" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Zaproszenia</router-link>
                        <router-link to="/ratedbefore" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Moje oceny</router-link>
                        <router-link to="/createDegustations"  class="bg-white text-gray px-3 py-2 rounded-md text-sm font-medium">Stwórz pokój do degustacji</router-link>
                    </div>
                   
                </div>
                 <div class="flex justify-end">
                     <user-status />
                    </div>
            </div>
        </div>
        
    </nav>
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
            {{ $route.meta.name }}
            </h1>
        </div>
    </header>
    <main class="h-max">
        <router-view></router-view>
    </main>
    
    
    
    
</div>
</template>


<script>

import UserStatus from './elements/UserStatus.vue'
export default
{
    components:{
        UserStatus
    }
   

}


</script>
        