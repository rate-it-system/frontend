<template>
  <div class="dashboard">
    <form @submit.prevent="submit">
        <input v-model="form.name" placeholder="Nazwa" name="name" id="name"><br />
      <textarea v-model="form.description" name="description" id="description"></textarea><br />
      <button type="submit">Loguj</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      form:{
        name: '',
        description: ''
      }
    }
  },
  methods: {
    submit() {
      axios.post('/degustations', this.form).then(() => {
        this.$router.push("/dashboard");
      });
    }
  }
};
</script>
