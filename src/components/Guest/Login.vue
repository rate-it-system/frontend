<template>
  <div class="login">
    <form @submit.prevent="submit">
             <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
       <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
      <button type="submit" class="btn btn-primary btn-lg btn-block">Loguj</button>
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
      this.login(this.form).then(() => {
        this.$router.push("/dashboard");
      });
    }
  }
};
</script>
