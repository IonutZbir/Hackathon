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
    });
</script>

<template>
    <div class="col-md-4">
        <div class="box ">
            <div class="img-box">
                <img :src="immagine" alt="">
            </div>
            <div class="detail-box">
                <h5>{{props.title}}</h5>
                <p>{{props.description}}</p>
                <a href="">Scopri di più</a>
            </div>
        </div>
    </div>
</template>