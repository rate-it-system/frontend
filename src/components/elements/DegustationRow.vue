<template>
       <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    {{degustation.id}}
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                    
                    </div>
                    <div class="text-sm text-gray-500">
                     
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                 {{degustation.name}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold truncate rounded-full bg-green-100 text-green-800">
                  
                   {{degustation.description}}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{status}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">
                  <span v-if="isOwner">
                    {{degustation.invitation_key}}
                  </span>
              </td>
                <td class="px-6 py-4 whitespace-nowrap">
                 {{degustation.owner.login}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <router-link to="" v-if="canStart" class="text-green-600 hover:text-green-500">Rozpocznij</router-link>
                <router-link to="" v-if="canStart" class="ml-3 text-yellow-700 hover:text-yellow-500">Edytuj</router-link>
                <router-link to="" v-if="canJoin" class="text-blue-600 hover:text-blue-500">Dołącz</router-link>
                <router-link to="" v-if="finished" class="text-indigo-600 hover:text-indigo-500">Wyniki</router-link>
              </td>
        </tr>
</template>

<script>

import { Degustation } from '@/models/Degustation';
import {mapGetters} from 'vuex'



export default {
  
    props:['degustation'],
    computed:{
        ...mapGetters(['user']),
        isOwner: function(){
            return this.user.id == this.degustation.owner_id
        },
        status:function(){
            switch(this.degustation.status)
            {
                case "created": return 'Nieaktywna';
                case "completed": return "Zakończona";
                case "in progress": return "Trwa";
            }
            return ''
        },
        canJoin:function(){
            return this.degustation.status == "in progress";
        },
        canStart:function(){
            return this.degustation.status == "created" && this.isOwner;
        },
        finished:function(){
            return this.degustation.status == "completed";
        }
    },

}
</script>