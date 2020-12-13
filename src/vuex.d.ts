import {ComponentCustomProperties} from 'vue'
import {Store} from 'vuex'

declare module '@vue/runtime-core'{
    interface StoreState {
        user?: User | null
      }

    interface ComponentCustomProperties{
        $store: Store<StoreState>
    }
}