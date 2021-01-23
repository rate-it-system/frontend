<template>
    <input class="text-input" :placeholder="placeholder" :type="type" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
</template>


<script>

export default{
    props:['placeholder','modelValue','id','type'] 

}

</script>