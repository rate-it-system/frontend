<template>
  <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nazwa
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opis
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Zaproszenie
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Twórca
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Akcje</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
              <degustation-row v-for="deg in degustations" :key="deg.id" :degustation="deg" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>


<script>

import { Degustation } from "@/models/Degustation";
import DegustationRow from '../elements/DegustationRow.vue';

export default {

    data(){
        return {
            degustations:[]
        }

    },
    components:{DegustationRow},
    async mounted(){
        let { data, err } = await this.$api.getDegustations();
        
        if(err == null)
        {  
            this.degustations = data ?? [];
        }
    }
}
</script>