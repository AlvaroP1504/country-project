<script setup lang="ts">
import CardCountry from './utils/CardCountry.vue';
import store from '../store';
import { useQuery } from '@vue/apollo-composable';
import { GET_COUNTRIES } from '../graphql/query';
import { watchEffect } from 'vue';
import CountryDetail from './utils/CountryDetail.vue';
/* Obtiene los resultados de los parametros del continente */
const { result } = useQuery(
    GET_COUNTRIES,
    {
        continents: store.state.continentParams
    });

const filterLike = (input:string,search:string):boolean => {
    return input.toLowerCase().includes(search.toLowerCase());
}



function filterCountries() {
    if(store.state.inputFilter === '') {
        store.state.countries = result.value.countries
    } else {
        store.state.countries = store.state.countries.filter((item) => filterLike(item.name, store.state.inputFilter))
    }
}

watchEffect(() => {

    if (result.value) {
        console.log("soy paises", result.value)
        store.commit('setCountries', result.value.countries)
        store.commit('setDialogOpen', false)
    }
    if(store.state.country_code !== ""){
        console.log("no estoy vacio")
        store.commit('setCountryDetailOpen',true)
    }


})


</script>
<template>
    <main class="flex-1 overflow-auto p-4">
        <div class="mb-10 grid grid-cols-6 gap-4">
            <!-- Input -->
            <div class="col-span-6 sm:col-span-4 md:col-span-4">
                <label for="input" class="mb-2 block font-bold text-gray-700">Filtra por Pais</label>
                <input v-model="store.state.inputFilter" type="text"
                    class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    placeholder="Busque el Pais" 
                    @keyup.enter="filterCountries"
                    />
            </div>

            <!-- Combo-box -->
            <div class="col-span-6 sm:col-span-2 md:col-span-2">
                <label for="combo-box" class="mb-2 block font-bold text-gray-700">Filtra Continente</label>
                <button class="bg-rose-700 text-white py-2 px-6 mx-2 rounded hover:text-green-300" @click="store.commit('setDialogOpen', true)">filtro</button>
            </div>
        </div>

            <div class="col-span-6 sm:col-span-4 md:col-span-4 px-7">
                <div class="grid grid-cols-1 justify-center gap-7 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
                    <CardCountry v-for="item in store.state.countries" 
                        :key="item.code" :country="item.name"
                        :continent="item.continent.name"
                        :code="item.code.toLocaleLowerCase()"
                        @click="store.commit('setCountryCode', item.code);"
                        class="cursor-pointer"
                    />
                   
                </div>
                <CountryDetail v-if="store.state.isCountryDetailOpen" />
            </div>


    </main>
</template>
