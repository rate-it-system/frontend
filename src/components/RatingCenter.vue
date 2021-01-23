<template>
<div>
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


export default
{
    methods:{
        logout(){
            this.$store.commit('removeUser');
            this.$router.push({name:'Landing'})
        }
    }


}


</script>