<template>
    <div class="flex">
        <div class="flex-none w-48 relative">
            <img src="beer.png" alt="" class="absolute inset-0 w-full h-full object-cover">
        </div>
        <div class="flex-auto p-6">
            <div class="flex flex-wrap">
                <h1 class="flex-auto text-xl font-semibold">
                    Test ciemnych piw
                </h1>
                <div class="text-xl font-semibold text-gray-500">
                    Zakończony
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Degustation } from '@/models/Degustation';
@Options({
    props:{
        degustation: Degustation
    }

})
export default class DegustationCard extends Vue{
    
}
</script>