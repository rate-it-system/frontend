<template>
      <button class="button-primary">
            {{ this.text }}
      </button>
</template>

<script>

import {Options, Vue} from 'vue-class-component'

@Options({
    props:{
       text:String
    }
})
export default class Button extends Vue{
    
}
</script>