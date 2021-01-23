<template>
    <div v-if="isLoggedIn">
       <span class="text-white text-sm font-medium py-2 px-3">Zalogowany jako: {{user.login}} </span>
        <a href="#" @click="logout" class="bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium">Wyloguj</a>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters(['isLoggedIn','user'])
    },
    methods:{
        logout(){
        this.$store.dispatch('logout');
        this.$router.push({name:'Landing'})
    }
    }
}
</script>