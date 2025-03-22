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

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <NavBarElement page-name="Home" page-link="/" />
                        <NavBarElement page-name="Chi Siamo" page-link="/about" />
                        <NavBarElement page-name="Requisiti" page-link="/requiments" />
                        <NavBarElement page-name="Registrati" page-link="/register" />
                        <NavBarElement page-name="Crea Squadra" page-link="/create" />
                        <NavBarElement page-name="Squadra" page-link="/access" />
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
