import { mapGetters } from 'vuex';
<template>
  <div class="container mx-auto sm:px-4 px-1">
    
      <router-view />  
    
  </div>
  
</template>

<script>
  import {mapGetters} from 'vuex'

export default  {
  computed:{
    ...mapGetters(['token'])
  },
  async created(){
      if(this.token !== null && this.token !== '')
      {
          let { data: userResponse, userErr} = await this.$api.getUserDetails(this.token);
          if(userErr == null)
          {
              this.$store.dispatch('login', userResponse)
              this.$router.push({name:'MainView'});
          }
          
      }
  }
}
</script>

<style lang="scss">

</style>
