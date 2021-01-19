<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Guest/Login.vue";

export default {
  name: "Guest",
  components: {
    Login
  }
};
</script>
