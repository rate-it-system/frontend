<template>
  <div class="dashboard">
    <form @submit.prevent="submit">
         <label>Nazwa</label>
                <input type="Name" class="form-control form-control-lg"/>
				
       <label>Opis</label>
                <textarea class="form-control" id="Opis" rows="3"></textarea>
				
	   <button type="submit" class="btn btn-primary btn-lg btn-block">Loguj</button>
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
