<script setup>
import {ref} from "vue"

const isVisible = ref(false);
const selectedImage = ref("");

const closePreview = () => {
  isVisible.value = false;
  document.body.style.overflow = "";
  document.querySelector(".mask")?.classList.remove("paused");
};

const showImage = (src) => {
  selectedImage.value = src;
  isVisible.value = true;
  document.body.style.overflow = "hidden";
  document.querySelector(".mask")?.classList.add("paused");
};

</script>

<template>

<div v-if="isVisible" class="image-view" @click="closePreview">
        <img id="image-preview" :src="selectedImage" >
</div>

<div class="carousel">
            <div class="mask"> 
                <img class="carousel-image"          src="/images/H2024/1.jpg" @click="showImage('/images/H2024/h_size/1.jpg')">
                <img class="carousel-image"          src="/images/H2024/2.jpg"  @click="showImage('/images/H2024/h_size/2.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/3_.jpg"  @click="showImage('/images/H2024/h_size/3_.jpg')">
                <img class="carousel-image"          src="/images/H2024/4.jpg"  @click="showImage('/images/H2024/h_size/4.jpg')">
                <img class="carousel-image"          src="/images/H2024/5.jpg"  @click="showImage('/images/H2024/h_size/5.jpg')">
                <img class="carousel-image"          src="/images/H2024/6.jpg"  @click="showImage('/images/H2024/h_size/6.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/7_.jpg"  @click="showImage('/images/H2024/h_size/7_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/8_.jpg"  @click="showImage('/images/H2024/h_size/8_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/9_.jpg"  @click="showImage('/images/H2024/h_size/9_.jpg')">
                <img class="carousel-image"          src="/images/H2024/10.jpg"  @click="showImage('/images/H2024/h_size/10.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/11_.jpg"  @click="showImage('/images/H2024/h_size/11_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/12_.jpg"  @click="showImage('/images/H2024/h_size/12_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/13_.jpg"  @click="showImage('/images/H2024/h_size/13_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/15_.jpg"  @click="showImage('/images/H2024/h_size/15_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/16_.jpg"  @click="showImage('/images/H2024/h_size/16_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/17_.jpg"  @click="showImage('/images/H2024/h_size/17_.jpg')">
                <!-- REPEATING -->
                <img class="carousel-image"          src="/images/H2024/1.jpg"  @click="showImage('/images/H2024/h_size/1.jpg')">
                <img class="carousel-image"          src="/images/H2024/2.jpg"  @click="showImage('/images/H2024/h_size/2.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/3_.jpg"  @click="showImage('/images/H2024/h_size/3_.jpg')">
                <img class="carousel-image"          src="/images/H2024/4.jpg"  @click="showImage('/images/H2024/h_size/4.jpg')">
                <img class="carousel-image"          src="/images/H2024/5.jpg"  @click="showImage('/images/H2024/h_size/5.jpg')">
                <img class="carousel-image"          src="/images/H2024/6.jpg"  @click="showImage('/images/H2024/h_size/6.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/7_.jpg"  @click="showImage('/images/H2024/h_size/7_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/8_.jpg"  @click="showImage('/images/H2024/h_size/8_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/9_.jpg"  @click="showImage('/images/H2024/h_size/9_.jpg')">
                <img class="carousel-image"          src="/images/H2024/10.jpg"  @click="showImage('/images/H2024/h_size/10.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/11_.jpg"  @click="showImage('/images/H2024/h_size/11_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/12_.jpg"  @click="showImage('/images/H2024/h_size/12_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/13_.jpg"  @click="showImage('/images/H2024/h_size/13_.jpg')">
                <img class="carousel-image vertical" src="/images/H2024/15_.jpg"  @click="showImage('/images/H2024/h_size/15_.jpg')">
            </div>
        </div>
</template>

<style>
:root {
    --vertical: 10;
    --horizontal: 6;
    --size: 400px;
    --v-size: calc(267 / 400 * var(--size) * 267/400);
    --margin: 5px;
    --opacity: 1;
    --width: calc( 
        -1 * (
            var(--horizontal) * (2* var(--margin) + var(--size)) + 
            var(--vertical) * (2* var(--margin) + var(--v-size)
        ))
    );
}

.mask {
    margin: 50px 0;
    display: flex;
    flex-direction: row;
    animation: animazione 35s linear infinite;
}

.mask:hover {
    animation-play-state: paused;
}
.mask.paused {
  animation-play-state: paused;
}

.carousel {
    width: 100%;
    overflow: hidden;
    mask-image: linear-gradient(90deg, rgba(0,0,0,var(--opacity)) 8%, rgba(0,0,0,1) 28%, rgba(0,0,0,1) 72%, rgba(0,0,0,var(--opacity)) 92%);  
}

.carousel-image {
    user-select: none;
    aspect-ratio: auto;
    border-radius: 8px;
    margin: 0 var(--margin);
    display: inline-block;
    width: var(--size);
    height: 100%;
}

.vertical {
    width: var(--v-size);
    height: 100%;
}

.horizontal {
    width: var(--size);
    height: 100%;
}

@keyframes animazione {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(var(--width));
    }
}

.image-view {
    display: flex;
    inset: 0;
    position: fixed;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(1px);
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
}

.image-view img {
    border-radius: 24px;
    height: 70vh;
}


@media (max-width: 992px) {
  .image-view img {
    border-radius: 12px;
    max-width: 90vw;
    height: auto;
  }
}
</style>
