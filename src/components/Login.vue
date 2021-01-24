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
                        <Button text='Zaloguj się przez konto Github' v-on:click="authProvider('github')" />
                        <Button text='Zaloguj się przez konto Facebook' v-on:click="authProvider('facebook')" />
                        <Button text='Zaloguj się przez konto Google' v-on:click="authProvider('google')" />
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
          isLoggingIn:false //czy aktualnie trwa proces logowania i należy pokazać zaślepkę
      }
  },
  mounted(){
      console.log(this.$api);

  },
  components:{Button},
    methods:{

      async authProvider(provider){

        this.isLoggingIn = true;

        //vue-social-auth obsługuje proces uzyskania zgody na dodanie konta
        let authResponse = await this.$auth.authenticate(provider).catch((err) =>{
              this.isLoggingIn=false;
              return;
        });

        //Backend - wysłać kod, uzyskujemy api_token w odpowiedzi
        let { data, err } = await this.$api.socialLogin(provider, authResponse);

        if(err != null)
        {
            this.isLoggingIn=false;
            return;
        }

        //Zapisujemy token do Vuex i localStorage
        await this.$store.dispatch('saveToken', data.token);
        //Pobieramy szczegóły użytkownika, zapisujemy do Vuex
        let { data: userResponse, err: userErr} = await this.$api.getUserDetails(data.token);
        if(userErr != null)
        {
            this.isLoggingIn = false;
            return;
        }
        await this.$store.dispatch('login', userResponse)
        await this.$router.push({name: 'MainView'});

        this.isLoggingIn = false;
      }
  }
}
</script>