<template>
    <input class="text-input" :placeholder="placeholder" :type="type" :value="value" @input="$emit('input',$event.target.value)">
</template>


<script>

export default{
    props:['placeholder','value','id','type'] 

}

</script>