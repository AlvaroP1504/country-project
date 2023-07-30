<template>
    <!-- dialogo -->
    <div v-if="store.state.isDialogOpen" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
            <div
                :class="['bg-white rounded p-4 transform transition-all duration-300', store.state.isDialogOpen ? 'translate-y-0' : '-translate-y-full']">
                <h2 class="text-lg font-semibold mb-3">Selecciona un continente</h2>
                <div class="grid grid-cols-3 gap-4">
                    <button v-for="continent of store.state.continents" :key="continent.code"
                        @click="selectContinent(continent.code);"
                        :class="['p-2 rounded shadow', store.state.continentParams.includes(continent.code) ?  'bg-blue-500 text-white': ' bg-gray-200' ]">
                        <div class="text-center font-bold">{{ continent.name }}</div>
                    </button>
                </div>
                    <button class="bg-green-500 text-white py-3 px-6 rounded-full float-right" @click="store.commit('setMainContentRender',true)">Filtrar</button>

          
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import store from '../../store'

function selectContinent (code:string){
    if(store.state.continentParams.includes(code)){
        store.commit('setContinentsParams', store.state.continentParams.filter((continent) => continent !== code))
        console.log(store.state.continentParams)
    } else {
        store.commit('setContinentsParams', [...store.state.continentParams, code])
        console.log(store.state.continentParams)

    }
}

// function filtrarPaises(){
//         console.log( [...selectedContinents.value])
//     if(selectedContinents.value.length > 0){
//         const continents = [...selectedContinents.value]
//         store.dispatch('listCountries',continents)
//     }else{
//         alert("Selecciona al menos un continentes")
//     }
//     // store.dispatch('listCountries', selectedContinents)
// }




</script>