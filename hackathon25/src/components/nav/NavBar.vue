<script setup>
import NavBarElement from './NavBarElement.vue';
import LogoNavBar from './LogoNavBar.vue';
</script>

<template>
    <div class="hero_bg_box">
        <div class="bg_img_box">
            <div class="particle-network-animation"></div>
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,218.7C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
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
