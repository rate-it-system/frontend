<template>
  <div id="app">
    {{ messages}}
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