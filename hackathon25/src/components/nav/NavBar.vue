<script setup>
import NavBarElement from './NavBarElement.vue';
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
                <!-- COMPONENTE LOGO CON LINK ALLA HOME PAGE-->
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
                        <NavBarElement page-name="About" page-link="/about" />
                        <NavBarElement page-name="Services" page-link="/services" />
                        <NavBarElement page-name="Why Us" page-link="/why" />
                        <NavBarElement page-name="Team" page-link="/team" />
                        <NavBarElement page-name="Login" page-link="/login" />
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
