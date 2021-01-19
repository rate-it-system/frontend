<template>
  <div class="dashboard">

    <div class="container">

      <div class="row justify-content-center">
        <div class="col-md-8">
          <DegustationCard class="card" style="margin-bottom: 5px;" v-for="degustation in degustations" :key="degustation.id" :load="load" v-bind:degustation="degustation">
          </DegustationCard>
          <a class="btn btn-info float-right" style="margin-left: 5px;">Następne</a>
          <router-link to="/createDegustation" class="btn btn-success float-right" style="margin-left: 5px;">+Nowa degustacja+</router-link>
          <a class="btn btn-info float-left" style="margin-left: 5px;">Poprzednie</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DegustationCard from "@/components/Authed/DegustationCard";

export default {
  name: "Dashboard",
  components: {
    DegustationCard
  },
  data() {
    return {
      degustations: []
    }
  },
  methods: {
    load: function () {
      axios.get('/degustations')
          .then(response => {
            this.degustations = response.data;
          });
    },
  },
  mounted() {
    this.load();
  }
};
</script>
