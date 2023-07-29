import { useStore } from "vuex"
import { onMounted } from "vue";


export const useCountryStore = () => {
    

    const store = useStore();

    onMounted(()=>{
        if(!store.getters['country/isContinentReady']){
            console.log("entre")
            store.dispatch('country/getContinents')
        }

    })

    return {

    }
}