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
                        <a href="/RatingCenter" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Centrum ocen</a>
                        <a href="/invite" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Zaproszenia</a>
                        <a href="/ratedbefore" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Moje oceny</a>
                        <a href="/createDegustations"  class="bg-white text-gray px-3 py-2 rounded-md text-sm font-medium">Stwórz pokój do degustacji</a>
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
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" >
            <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <router-view></router-view>
                </div>
            </div>
        </div>
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
        