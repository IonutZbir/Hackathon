<script setup>
import StandaloneNavbar from '@/components/nav/StandaloneNavbar.vue';

</script>
<template>
    <StandaloneNavbar bg-color="transparent"/>
    <div class="access-view">
        <h1 style="color: white;">Le squadre non sono visibili al momento.</h1>
    </div>
</template>

<style>

.access-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}
</style>