<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 bg-scroll bg-center bg-cover px-2 sm:px-0" style="background-image: url('background.jpg')">
        <div class="max-w-md w-full space-y-8 bg-white border-2 border-indigo-700 rounded-md p-3 shadow-xl">
            <div>
                <img class="mx-auto h-24 w-auto" src="beer.png">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Zarejestruj się
                </h2>
               
            </div>
        
            <div class="mt-8 space-y-6">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="login" class="sr-only">Login</label>
                        <text-input placeholder='Login' type='text' v-model="login" id='login' />
                    </div>
                     <div>
                        <label for="email" class="sr-only">Email</label>
                        <text-input placeholder='Email' type='text' v-model="login" id='Email' />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Hasło</label>
                        <text-input placeholder='Hasło' type='password' v-model="password" id='password' />
                    </div>
                  
                </div>
                <div>
                    <Button text='Zarejestruj się' v-on:click="print" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { User } from '@/models/User';
import { Options, Vue } from 'vue-class-component';
import Button from './elements/Button.vue'
import TextInput from './elements/TextInput.vue';


@Options({
    components:{
        Button,
        TextInput
    }

})
export default class Registration extends Vue {

    private login  = '';
    private email = '';
    private password = '';

    print(){
        const user = new User();
        user.name= this.login;
        user.id = 1;
        this.$store.commit('setUser',user);
        this.$router.push({name:"MainView"});
    }
}
</script>