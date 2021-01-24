<template>
<div>
    <Navigation/>
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

//import UserStatus from './elements/UserStatus.vue'
import Navigation from './elements/Navigation.vue'
import {mapGetters} from 'vuex'
export default
{
    components:{
        //UserStatus
      Navigation
    },
    computed:{
        ...mapGetters(['user','hasActiveDegustation']),
        
    }
   

}


</script>
        