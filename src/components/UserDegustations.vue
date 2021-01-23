<template>
    <div class="flex justify-start">
            <degustation-card></degustation-card>
    </div>
</template>


<script>

import { Degustation } from "@/models/Degustation";
import DegustationCard from './elements/DegustationCard.vue';

export default {

    data(){
        return {
            degustations:[]
        }

    },
    components:{DegustationCard},
    mounted(){
        console.log('mounted');
    }
}
</script>