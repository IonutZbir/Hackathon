<script setup>
    import Welcome from './Welcome.vue';
    import NavBar from './nav/NavBar.vue';
    
    import {network} from "@/../js/network"
    import { onMounted } from "vue";
    onMounted(() => {network();})


</script>
<template>
    <div class="hero_area">
        <NavBar />
        <Welcome />
    </div>
</template>

<style>
.hero_area .hero_bg_box .bg_img_box {
  min-width: 100%;
  min-height: 100%;
}

.hero_area .hero_bg_box img {
  min-width: 100%;
  min-height: 100%;
}

.hero_area {
  position: relative;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
</style>
