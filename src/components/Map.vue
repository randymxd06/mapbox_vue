<script setup lang="ts">
import { useMap } from '../composables/useMap.ts';
const { mapContainer } = useMap();
</script>

<template>
    <main ref="mapContainer" class="map-container"></main>
</template>

<style src="../styles/map.css"></style>