<template>
  <div class="DegustatyonCard">
    <input class="card-header" v-if="editing" type="text" name="name" v-model="degustation.name">
    <div v-else class="card-header">{{ degustation.name }}</div>
    <div class="card-body">
      <textarea v-if="editing" name="description" v-model="degustation.description"></textarea>
      <div v-else>
      {{ degustation.description }}
      </div>
      <div class="card">
        <div class="card-header">Zaproś znajomych</div>
        <input class="card-body" v-model="degustation.invitation_key" disabled>
      </div>
      <a class="btn btn-success float-right" style="margin-left: 5px;">Start</a>
      <button v-if="editing" class="btn btn-success float-right" v-on:click="editDegustation(degustation)" style="margin-left: 5px;">Zapisz</button>
      <button v-else class="btn btn-info float-right" v-on:click="editing = true" style="margin-left: 5px;">Edytuj</button>
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
  data() {
    return {
      editing: false
    }
  },
  methods: {
    deleteDegustation: function (degustation) {
      console.log(degustation);
      axios.delete('/degustations/' + degustation.id).then(() => {
        this.load();
      });
    },
    editDegustation: function (degustation) {
      this.editing = false;
      axios.put('/degustations/' + degustation.id,degustation).then(() => {
        this.load();
      });
    },
  },
};
</script>
