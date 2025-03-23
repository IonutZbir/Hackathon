<script setup>


import StandaloneNavbar from '@/components/nav/StandaloneNavbar.vue';
import {network} from "@/../js/network"
import "@/css/network.css";
import { onMounted } from "vue";
import GalleryView from './GalleryView.vue';
onMounted(() => {network();})
// import GalleryView from './GalleryView.vue';

</script>
<template>
        <div class="classe">
            <div class="uno">
                <div class="particle-network-animation"></div>
            </div>
            <StandaloneNavbar bg-color="transparent"/>
            <GalleryView></GalleryView>
        </div>
</template>
<style>
.uno {
    position: relative;
    height: 0%;
}
.classe {
    width: 100%;
    height: 3600px;
    /* TODO:FIX */
    position: absolute;
    background: var(--gradiente);
}
</style>