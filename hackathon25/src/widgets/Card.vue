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
    <div class="col-md-4 card-view">
        <div class="box ">
            <div class="desc-image">
                <img class="inner-image" :src="immagine" alt="">
            </div>
            <div class="detail-box">
                <h5>{{ props.title }}</h5>
                <p>{{ props.description }}</p>
                <a :href="props.moreLink" target="_blank" rel="noopener noreferrer">{{ props.moreDesc }}</a>
            </div>
        </div>
    </div>
</template>

<style>
    .card-view {
        margin: 10px 0;
    }
    .card-view a {
        margin-top: auto;
        margin-bottom: 0px;
    }
    
    .card-view .box {
        height: 100%;
    }
    .inner-image {
        padding-bottom: 15px;
        padding-left: 7.5px;
        padding-right: 7.5px;
        width: 100%;
        height: 100%;
    }
    .desc-image{
        width: 80px;
        aspect-ratio: 1/1;
    }
    .card-view .detail-box {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>