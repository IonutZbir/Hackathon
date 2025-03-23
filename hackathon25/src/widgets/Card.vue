<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    immagine: {
        type: String,
        required: true
    },
    moreDesc: {
        type: String,
        required: false,
    },
    moreLink: {
        type: String,
        required: false
    },
});
</script>

<style></style>

<template>
    <div class="col-md-4">
        <div class="box ">
            <div class="img-box">
                <img :src="immagine" alt="">
            </div>
            <div class="detail-box">
                <h5>{{ props.title }}</h5>
                <p>{{ props.description }}</p>
                <a :href="props.moreLink" target="_blank" rel="noopener noreferrer">{{ props.moreDesc }}</a>
            </div>
        </div>
    </div>
</template>