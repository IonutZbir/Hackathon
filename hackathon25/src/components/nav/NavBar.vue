<script setup>
import NavBarElement from './NavBarElement.vue';
import LogoNavBar from './LogoNavBar.vue';
</script>

<template>
    <div class="hero_bg_box">
        <div class="bg_img_box">
            <img src="/src/images/hero-bg.png" alt="" />
        </div>
    </div>

    <!-- header section strats -->
    <header class="header_section">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container">
                
                <LogoNavBar/>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" >
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
