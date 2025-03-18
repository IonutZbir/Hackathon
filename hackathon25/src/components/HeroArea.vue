<script setup>
    import "@/css/style.css";
    import "@/css/bootstrap.css";
    import "@/css/network.css";
    import "@/css/responsive.css";
    import $ from "jquery";
    import "@/../js/network.js";
    // import "@/../js/bootstrap.js";
    import Carousel from './Carousel.vue';
    import NavBar from './nav/NavBar.vue';
</script>
<template>
    <div class="hero_area">
        <NavBar />
        <Carousel />
    </div>
</template>
