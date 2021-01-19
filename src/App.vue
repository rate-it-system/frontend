<template>
  <div id="app">
    <router-link to="/">wyloguj</router-link> <br />
    {{ messages}}
    <hr />
    <router-view />
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters({
      messages: 'messages'
    })
  },
}
</script>