<script setup>
import StandaloneNavbar from './StandaloneNavbar.vue';

</script>

<template>
    <div class="hero_bg_box">
        <div class="bg_img_box">
            <div class="particle-network-animation"></div>
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1"
                    d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,218.7C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
        </div>
    </div>
    <StandaloneNavbar bg-color="trasparent" />

</template>

<style>
body {
  background: var(--gradiente);
  min-height: 100vh;
}

body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: inherit;
  z-index: -1;
}


.hero_area .hero_bg_box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}

.bg_img_box {
    width: 100%;
    height: 100vh;
    background: var(--gradiente);
    position: relative;
}

.wave {
    position: absolute;
    bottom: -7.2%;
}
</style>
