<script setup>
    import "@/css/style.css";
    import "@/css/bootstrap.css";
    import "@/css/network.css";
    import "@/css/responsive.css";
    import Carousel from './Carousel.vue';
    import NavBar from './nav/NavBar.vue';
    
    import {network} from "@/../js/network"
    import { onMounted } from "vue";
    onMounted(() => {network();})
    import InteractiveButton from "./InteractiveButton.vue";

</script>
<template>
    <div class="hero_area">
        <NavBar />
        <Carousel />
    </div>
</template>
