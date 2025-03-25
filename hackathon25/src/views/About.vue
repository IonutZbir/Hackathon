<script setup>
import "@/css/colors.css";
import "@/css/style.css";
import "@/css/bootstrap.css";
import "@/css/network.css";
import "@/css/responsive.css";

import StandaloneNavbar from "@/components/nav/StandaloneNavbar.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
	<StandaloneNavbar bg-color="transparent" />
	<AboutComponent />
	<Footer />
</template>
