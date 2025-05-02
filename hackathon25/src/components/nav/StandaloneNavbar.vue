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
                        <a id="info-cdl" href="http://informatica.uniroma2.it" style=" padding: 5px 20px">
                            <font-awesome-icon icon="fa-solid fa-graduation-cap" style="margin-right: 3px;"/>
                            CDL
                        </a>
                        <!-- <NavBarElement page-name="Info" page-link="/about" /> -->
                        <!-- <NavBarElement page-name="Requisiti" page-link="/requiments" /> -->
                        <NavBarElement page-name="Galleria" page-link="/gallery" />
                        <!-- TODO: Rinominare in Registrati -->
                        <NavBarElement page-name="Crea Squadra" page-link="/create"/>
                        <NavBarElement page-name="Squadre" page-link="/teams" />
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>


<style>
#info-cdl {
    display: flex;
    color: white;
    font-weight: bold;
    align-items: center;
}

#info-cdl:hover {
    color: #00bbf0;
}

</style>