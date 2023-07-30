<script lang="ts" setup>
const props = defineProps({
    continents: Array,
    country: String,
    continent: String,
    code: String
})
</script>
<template>
    
    <div class="mb-4 overflow-hidden rounded bg-neutral-100 shadow-lg  hover:bg-orange-400">
          <!-- input que me permite ingresar el nombre del pais para filtrarlo -->
          <img class="mb-4 w-full object-cover" :src="'https://flagcdn.com/'+props.code+'.svg'" alt="Cityscape" />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">{{ props.country }}</div>
            <p class="text-base text-gray-700">{{ props.continent }}</p>
          </div>
        </div>
</template>