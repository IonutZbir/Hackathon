<script setup>

import StandaloneNavbar from "@/components/nav/StandaloneNavbar.vue";
import Footer from "@/components/Footer.vue";
import GalleyComponent from "@/components/GalleyComponent.vue";

import {network} from "@/../js/network"
import "@/css/network.css";
import { onMounted } from "vue";
onMounted(() => {network();})

</script>
<template>
        <div class="classe">
            <div class="uno">
                <div class="particle-network-animation"></div>
            </div>
            <StandaloneNavbar bg-color="transparent"/>
            <GalleyComponent/>
            <Footer/>
        </div>
</template>
<style>
.uno {
    position: relative;
    height: 0%;
}
</style>