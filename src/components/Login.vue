<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-md w-full space-y-8 bg-white border-2 border-indigo-700 rounded-md p-3 shadow-xl">
            <div>
                <img class="mx-auto h-24 w-auto" src="https://via.placeholder.com/100x100?text=LOGO">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Zaloguj się
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    lub <a href="#" class="font-medium text-blue-400 hover:text-blue-300">zarejestruj</a>
                </p>
            </div>
        
            <div class="mt-8 space-y-6">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="login" class="sr-only">Login</label>
                        <input v-bind="login" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors duration-300" placeholder="Login">
                    </div>
                    <div>
                        <label for="password" class="sr-only">Hasło</label>
                        <input v-bind="password" type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Hasło">
                    </div>
                  
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="rememberMe" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                        <label for="rememberMe" class="ml-2 block text-sm text-gray-900">
                            Zapamiętaj mnie
                        </label>
                    </div>
                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Odzyskaj hasło
                        </a>
                    </div>
                </div>

                <div>
                    <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indivgo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Zaloguj się
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Login extends Vue {
    private login  = '';
    private password = '';
    private rememberMe = false;

}
</script>