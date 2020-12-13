<template>
    <div class="flex justify-start">
            <degustation-card></degustation-card>
    </div>
</template>


<script lang="ts">

import { Degustation } from "@/models/Degustation";
import { Options, Vue } from "vue-class-component";
import DegustationCard from './elements/DegustationCard.vue';

@Options({
    components:{
        DegustationCard
    }
})
export default class UserDegustations extends Vue{

    private degustations!: Degustation[]

    mounted(){
        console.log('mounted');
    }
}
</script>