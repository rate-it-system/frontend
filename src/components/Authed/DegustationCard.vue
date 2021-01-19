<template>
  <div class="DegustatyonCard">
    <input class="card-header" v-if="degustation.editing" type="text" name="name" v-model="degustation.name">
    <div v-else class="card-header">{{ degustation.name }}</div>
    <div class="card-body">
      {{ degustation.description }}
      <div class="card">
        <div class="card-header">Zaproś znajomych</div>
        <input class="card-body" v-model="degustation.invitation_key" disabled>
      </div>
      <a class="btn btn-success float-right" style="margin-left: 5px;">Start</a>
      <button v-if="degustation.editing" class="btn btn-success float-right" v-on:click="degustation.editing = true" style="margin-left: 5px;">Zapisz</button>
      <button v-else class="btn btn-info float-right" v-on:click="degustation.editing = true" style="margin-left: 5px;">Edytuj</button>
      <a class="btn btn-info float-right" style="margin-left: 5px;">Lista uczestników</a>
      <button v-on:click="deleteDegustation(degustation)" class="btn btn-danger float-right" style="margin-left: 5px;">Usuń</button>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "DegustatyonCard",
  props: {
    degustation: Object,
    load: Function
  },
  methods: {
    deleteDegustation: function (degustation) {
      console.log(degustation);
      axios.delete('/degustations/' + degustation.id).then(() => {
        this.load();
      });
    },
  },
};
</script>
