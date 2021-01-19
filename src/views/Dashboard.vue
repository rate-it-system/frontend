<template>
  <div class="dashboard">

    <div class="container">

      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card" style="margin-bottom: 5px;" v-for="degustation in degustations" :key="degustation.id">
            <div class="card-header">{{ degustation.name }}</div>
            <div class="card-body">
              {{ degustation.description }}
              <div class="card">
                <div class="card-header">Zaproś znajomych</div>
                <input class="card-body" v-model="degustation.invitation_key">
              </div>
              <a class="btn btn-success float-right" style="margin-left: 5px;">Start</a>
              <a class="btn btn-info float-right" style="margin-left: 5px;">Edytuj</a>
              <a class="btn btn-info float-right" style="margin-left: 5px;">Lista uczestników</a>
              <a class="btn btn-danger float-right" style="margin-left: 5px;">Usuń</a>
            </div>
          </div>
          <a class="btn btn-info float-right" style="margin-left: 5px;">Następne</a>
          <a class="btn btn-info float-left" style="margin-left: 5px;">Poprzednie</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
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
    }
  },
  mounted() {
    this.load();
  }
};
</script>
