<template>

<div class="carousel">
            <div class="mask"> 
                <img class="carousel-image"          src="../images/H2024/1.jpg">
                <img class="carousel-image"          src="../images/H2024/2.jpg">
                <img class="carousel-image vertical" src="../images/H2024/3_.jpg">
                <img class="carousel-image"          src="../images/H2024/4.jpg">
                <img class="carousel-image"          src="../images/H2024/5.jpg">
                <img class="carousel-image"          src="../images/H2024/6.jpg">
                <img class="carousel-image vertical" src="../images/H2024/7_.jpg">
                <img class="carousel-image vertical" src="../images/H2024/8_.jpg">
                <img class="carousel-image vertical" src="../images/H2024/9_.jpg">
                <img class="carousel-image"          src="../images/H2024/10.jpg">
                <img class="carousel-image vertical" src="../images/H2024/11_.jpg">
                <img class="carousel-image vertical" src="../images/H2024/12_.jpg">
                <img class="carousel-image vertical" src="../images/H2024/13_.jpg">
                <img class="carousel-image vertical" src="../images/H2024/15_.jpg">
                <img class="carousel-image vertical" src="../images/H2024/16_.jpg">
                <img class="carousel-image vertical" src="../images/H2024/17_.jpg">
                <!-- REPEATING -->
                <img class="carousel-image"          src="../images/H2024/1.jpg">
                <img class="carousel-image"          src="../images/H2024/2.jpg">
                <img class="carousel-image vertical" src="../images/H2024/3_.jpg">
                <img class="carousel-image"          src="../images/H2024/4.jpg">
                <img class="carousel-image"          src="../images/H2024/5.jpg">
                <img class="carousel-image"          src="../images/H2024/6.jpg">
            </div>
        </div>
</template>

<style>
:root {
    --vertical: 10;
    --horizontal: 6;
    --size: 23vw;
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
    display: flex;
    flex-direction: row;
    animation: animazione 1s linear infinite;
}

.mask:hover {
    animation-play-state: paused;
}
.carousel {
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
</style>