<template>
<div class="min-h-28 flex items-center justify-center bg-gray-100 bg-scroll bg-center bg-cover px-2 sm:px-0">
         <div class="max-w-md w-full space-y-8 bg-white border-2 border-indigo-700 rounded-md p-3 shadow-xl">
            <div class="rounded-md shadow-sm -space-y-px">
            <div class="mb-4">
                <label for="code" class="sr-only">Kod zaproszenia</label>
                <input id="code" name="code" v-model="code" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Kod zaproszenia">
            </div>
              <div class="mt-8 space-y-6">                    
                    <Button text='Aktywuj kod' @click="processInvite()" />
            </div>
        </div>
    </div>
</div>
</template>


<script>

import Button from './elements/Button'
export default
{
    data(){ return {
        code:''
    } },
    components:{
        Button
    },
    methods:{
        processInvite(){
            var {data,err} = this.$api.useInvitationCode(this.code);
            if(err == null)
                {
                    this.$router.push({name:'MainView'});
                }
        }

    }

}


</script>