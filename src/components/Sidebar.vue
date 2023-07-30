<template>
    <!-- sidebar -->
    <aside id="sidebar"
      :class="['bg-white w-64 p-4 absolute top-0 left-0 h-full transition-all duration-300 z-10', isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0']">

          <img href="/" src="../assets/logo.png" alt="logo">

      <ul>
        <li class="mb-2 py-1 font-semibold bg-slate-600 rounded text-center">
          <button class="text-white hover:text-green-300" @click="store.commit('setDialogOpen', true)">Lista de Paises</button>
        </li>
        <li class="mb-2  bg-slate-600 rounded">
          <a href="#" class="text-white hover:text-green-300">Lista 2</a>
        </li>
        <li class="mb-2  bg-slate-600 rounded">
          <a href="#" class="text-white hover:text-green-300">Lista 3</a>
        </li>
      </ul>
    </aside>
    <!-- fondo cuando esta en movil -->
    <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="fixed inset-0 bg-black opacity-50 z-0"></div>
</template>
<script setup lang="ts">
import store from '../store';






// import { useCountryStore } from '../composables/useCountryStore';
// import { useQuery } from '@vue/apollo-composable';
// import { GET_CONTINENTS } from '../graphql/query';
// import { watchEffect } from 'vue';

// const { result } = useQuery(GET_CONTINENTS);

// watchEffect(() => {
//   console.log('result.value', result.value)
//   console.log('result.value.data', result.value.data)
// })

// useCountryStore()
// const toggleSidebar = () => {
  //   isSidebarOpen.value = !isSidebarOpen.value
  // }
  
  // function openContinentDialog() {
  //   console.log('openContinentDialog mexico')
  // }
  const isSidebarOpen = false

</script>
<style>
/* Estilo para el sidebar en pantallas medianas y grandes */
@media (min-width: 768px) {
  #sidebar {
    position: static !important;
    transform: none !important;
  }
}
</style>
