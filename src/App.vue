<template>
  <div class="container mx-auto px-4">
  <router-view />  
  </div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options()
export default class App extends Vue {
  
}
</script>

<style lang="scss">

</style>
