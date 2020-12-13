<template>
<div>
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="h-12 w-12" src="beer.png" alt="Piwo">
                    </div>
                    <div class="ml-5 flex items-baseline space-x-4">
                        <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Centrum ocen</a>
                        <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Zaproszenia</a>
                        <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Moje oceny</a>
                    </div>
                   
                </div>
                 <div class="flex justify-end">
                        <span class="text-white text-sm font-medium py-2 px-3">Zalogowany jako: Jan Kowalski</span>
                        <a href="#" @click="logout" class="bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium">Wyloguj</a>
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
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </main>
    
    
    
    
</div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
export default class Dashboard extends Vue
{
    logout(){
        this.$store.commit('removeUser');
        this.$router.push({name:'Landing'})
    }

}


</script>