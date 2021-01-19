<template>
  <div class="login">
    <form @submit.prevent="submit">
      <input type="text" name="login" id="login" placeholder="login" v-model="form.login"><br>
      <input type="password" name="password" id="password" placeholder="hasło" v-model="form.password"><br>
      <button type="submit">Loguj</button>
      <br>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      form: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    submit() {
      this.login(this.form);
    }
  }
};
</script>
