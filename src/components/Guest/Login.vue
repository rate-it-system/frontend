<template>
  <div class="hello">
    <form @submit.prevent="submit">
      <input type="text" name="login" id="login" placeholder="login" v-model="form.login"><br />
      <input type="password" name="password" id="password" placeholder="hasło" v-model="form.password"><br />
      <button type="submit">Loguj</button>
    </form>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  name: 'Login',
  components: {

  },
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
    }
  },
  methods: {
    submit() {
      const response = axios.post("login");
      console.log(response);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
