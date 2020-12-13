<template>
    <input class="text-input" :placeholder="placeholder" :type="type" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
</template>


<script lang="ts">

import {Options,Vue} from 'vue-class-component'

@Options({
    props:{
        placeholder:String,
        modelValue:String,
        id: String,
        type:String
    },
    emits:['update:modelValue']

})
export default class TextInput extends Vue{
    
}

</script>