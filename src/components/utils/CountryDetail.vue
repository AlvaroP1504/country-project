<script setup lang="ts">
// import {BasicInfo} from '../../models/country'
// import { GET_COUNTRY } from '../../graphql/query';
// import { useQuery } from '@vue/apollo-composable';
// import { watchEffect } from 'vue';
import store from '../../store';
// const props = defineProps({
//     country: String,
//     continent: String,
//     code: String,
//     capital: String,
//     language: Array<BasicInfo>,
//     population: String,
//     currency: String,
//     region: Array<BasicInfo>,
// })

// const usequery = () =>{
//     return useQuery(GET_COUNTRY,
//     {code : store.state.country_code}
//     )
// }

// let resp = usequery()


// watchEffect(()=>{
//     if(store.state.country_code){
//         // resp = usequery()
//         console.log("no estoy vacio")
//         store.commit('setCountryDetailOpen',true)

//     }
//     if(resp.result.value){
//         console.log("soy pais con detalle", resp.result.value)
//         store.commit('setCountryDetail', resp.result.value.country)
//         console.log("soy pais con detalle", store.state.country_detail)
//     }
// })
</script>
<template>
    <div class="col-span-6 sm:col-span-2 md:col-span-2">
                    <div class="mb-4 overflow-hidden rounded bg-neutral-100 shadow-lg">
                        <img class="mb-4 w-full object-cover" :src="'https://flagcdn.com/' + store.state.country_detail.code.toLocaleLowerCase()+ '.svg'" alt="Cityscape" />
                        <div class="px-6 py-4">
                            <div class="mb-2 text-xl font-bold">{{ store.state.country_detail.name }}</div>
                            <p class="text-base text-gray-700">{{ store.state.country_detail.continent.name }}</p>
                        </div>
                        <div class="px-6 py-4">
                            <p class="text-base text-gray-700"><span class="font-bold text-sky-600"> Capital:</span> {{ store.state.country_detail.capital?store.state.country_detail.capital: 'No se encontro la capital'  }}</p>
                            <p class="text-base text-gray-700"><span class="font-bold text-sky-600"> Language:</span> 
                                <span  v-for="x in store.state.country_detail.languages">
                                    {{" " + x.name + " " }}
                                </span>
                            </p>
                            <p class="text-base text-gray-700"><span class="font-bold text-sky-600"> Currency:</span> {{store.state.country_detail.currency }}</p>
                            <p class="text-base text-gray-700"><span class="font-bold text-sky-600"> Region:</span></p>
                            <div class="mb-4 mt-4 overflow-hidden rounded bg-white shadow-lg">
                                <!-- hacer una etiqueta p que itere maximo 5 elementos -->
                                <span class="block" v-for="x in store.state.country_detail.states.slice(0, 5)">
                                    {{" " + x.name + " " }}
                                </span>
                            </div>
                    </div>
                </div>
            </div>
</template>