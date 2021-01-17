<template>
  <div class="home">
    <Login msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Login from '@/components/Guest/Login.vue'; // @ is an alias to /src

@Options({
  components: {
    Login,
  },
})
export default class Home extends Vue {}
</script>
