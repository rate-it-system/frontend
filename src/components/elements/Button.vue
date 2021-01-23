<template>
      <button class="button-primary" v-on:click="$emit('click')">
            {{ this.text }}
      </button>
</template>

<script>


export default {
    props:['text']
}
</script>