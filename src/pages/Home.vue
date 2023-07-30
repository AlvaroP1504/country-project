<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
import MainContent from '../components/MainContent.vue'
import ContinentDialog from '../components/utils/ContinentDialog.vue';
import store from '../store';


if(!store.getters['getIsContinentReady']){
  store.dispatch('listContinents')
}
</script>

<template>
        <div class="flex relative h-screen bg-slate-400">
                <Sidebar />
                <ContinentDialog />
                <MainContent v-if="store.state.isMainContentRendered" />
        </div>
</template>