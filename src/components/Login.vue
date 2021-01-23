<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 bg-scroll bg-center bg-cover px-2 sm:px-0" style="background-image: url('background.jpg')">
        <div class="max-w-md w-full space-y-8 bg-white border-2 border-indigo-700 rounded-md p-3 shadow-xl">
            <div  v-if="!isLoggingIn">
                <div>
                <a href="/">
                    <img class="mx-auto h-24 w-auto" src="beer.png">
                </a>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Zaloguj się
                    </h2>
                </div>
            
                <div class="mt-8 space-y-6">                    
                        <Button text='Zaloguj się przez Github' v-on:click="authProvider('github')" />
                        <Button text='Powrót' v-on:click="$router.push('/')" />
                </div>
            </div>
            <div v-else>
                   <img class="mx-auto h-36 w-auto animate-spin" src="beer.png">
                   <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Trwa Logowanie</h2>
            </div>
        </div>
    </div>
</template>

<script>
import { User } from '@/models/User';
import Button from './elements/Button.vue'
import TextInput from './elements/TextInput.vue';

export default {

data(){
    return {
        login:'',
        password:'',
        rememberMe:false,
        isLoggingIn:false
    }
},
mounted(){
    console.log(this.$api);
    
},
components:{Button},
  methods:{

    async authProvider(provider){
        
        this.isLoggingIn = true;

        let authResponse = await this.$auth.authenticate(provider).catch((err) =>{
              this.isLoggingIn=false;
              return;
        });
        
    
        let { data : tokenResponse, tokenErr} = await this.$api.socialLogin(provider, authResponse);
        if(tokenErr != null)
        {
            this.isLoggingIn=false;
            return;
        }
        
        this.$store.dispatch('saveToken',tokenResponse.token);

        let { data: userResponse, userErr} = await this.$api.getUserDetails(tokenResponse.token);
        if(userErr != null)
        {
            this.isLoggingIn = false;
            return;
        }
        this.$store.dispatch('login', userResponse)
        this.$router.push({name:'MainView'});
        
        this.isLoggingIn = false;
    }
}
}
</script>