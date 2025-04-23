<script setup>
import LogoNavBar from './LogoNavBar.vue';
import NavBarElement from './NavBarElement.vue';
import { hamburgerMenu } from '../../../js/utils';

const props = defineProps({
    bgColor: {
        type: String,
        required: true,
    }
})

import { onMounted } from "vue";

onMounted(() => {hamburgerMenu();})

</script>
<template>
    <!-- header section strats -->
    <header class="header_section" :style="{ backgroundColor: bgColor }">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container">

                <LogoNavBar />

                <div class="h-menu not-active">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <NavBarElement page-name="Home" page-link="/" />
                        <!-- <NavBarElement page-name="Info" page-link="/about" /> -->
                        <!-- <NavBarElement page-name="Requisiti" page-link="/requiments" /> -->
                        <NavBarElement page-name="Galleria" page-link="/gallery" />
                        <!-- TODO: Rinominare in Registrati -->
                        <NavBarElement page-name="Crea Squadra" page-link="/create"/>
                        <NavBarElement page-name="Squadre" page-link="/access" />
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
