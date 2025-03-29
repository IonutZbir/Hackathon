<script setup lang="ts">

</script>

<template>
  <div class="gallery-view">
    <section>
      <h1 class="title1">HACKATHON<p>19</p>
      </h1>
      <div class="album">
        <div class="responsive-container-block bg">
          <div class="responsive-container-block img-cont">
            <img class="img" src="/images/H2019/1.jpg">
            <img class="img" src="/images/H2019/4.jpg">
            <!-- <img class="img img-last" src="/images/H2019/3.jpg"> -->
          </div>
          <div class="responsive-container-block img-cont">
            <img class="img img-big img-last" src="/images/H2019/3.jpg">
            <img class="img img-big" src="/images/H2019/5.jpg">
          </div>
          <div class="responsive-container-block img-cont">
            <img class="img" src="/images/H2019/6.jpg">
            <img class="img" src="/images/H2019/2.jpg">
            <!-- <img class="img" src="/images/H2019/1.jpg"> -->
          </div>
        </div>
      </div>
    </section>

    <section>
      <h1 class="title2">HACKATHON<p>24</p>
      </h1>
      <div class="album">
        <div class="responsive-container-block bg">
          <div class="responsive-container-block img-cont">
            <img class="img" src="/images/H2024/gallery/1.jpg">
            <img class="img" src="/images/H2024/gallery/4.jpg">
            <img class="img img-last" src="/images/H2024/gallery/6.jpg">
            <img class="img img-last" src="/images/H2024/gallery/9.jpg">
          </div>
          <div class="responsive-container-block img-cont">
            <img class="img img-big img-last" src="/images/H2024/gallery/3.jpg">
            <img class="img img-big" src="/images/H2024/gallery/5.jpg">
            <img class="img img-big" src="/images/H2024/gallery/7.jpg">
            <img class="img img-last" src="/images/H2024/gallery/141.jpg">

          </div>
          <div class="responsive-container-block img-cont">
            <img class="img" src="/images/H2024/gallery/11.jpg">
            <img class="img" src="/images/H2024/gallery/2.jpg">
            <img class="img" src="/images/H2024/gallery/8.jpg">
            <img class="img img-big" src="/images/H2024/gallery/10.jpg">
            <!-- <img class="img" src="/images/H2024/gallery/1.jpg"> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.gallery-view img {
  border-radius: 12px;
}

.gallery-view section {
  position: relative;
}

.gallery-view .title2 {
  text-align: end;
}

.gallery-view h1 {
  font-size: 4rem;
  margin: 10px;
  color: white;
}

.gallery-view .album {
  display: flex;
  justify-content: center;
  width: 100%;
}

.gallery-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.gallery-view .title1>p {
  all: unset;
  color: red;
}

.gallery-view .title2>p {
  all: unset;
  background-image: radial-gradient(circle, rgba(255,233,5,1) 20%, rgba(238,0,219,1) 30%, rgba(43,57,221,1) 60%);  
  background-clip: text;
  color: transparent;
}

.gallery-view h1 {
  /* color:red; */
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.album .responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  /* padding-top: 10px; */
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.album .responsive-container-block.bg {
  max-width: 1320px;
  margin: 0 0 0 0;
  justify-content: space-between;
}

.album .img {
  width: 100%;
  margin: 0 0 20px 0;
}

.album #i9rb {
  color: black;
}

.album #ir6i {
  color: black;
}

.album #ikz3b {
  color: black;
}

.album .responsive-container-block.img-cont {
  flex-direction: column;
  max-width: 33.3%;
  min-height: auto;
  margin: 0 0 0 0;
  height: 100%;
}

.album #ipix {
  color: black;
}

.album #ipzoh {
  color: black;
}

.album #ig5q8 {
  color: black;
}

.album #imtzl {
  color: black;
}

.album #i53es {
  color: black;
}

.album .img.img-big {
  height: 50%;
  margin: 0 0 16px 0;
}

@media (max-width: 1024px) {
  .album .img {
    margin: 0 0 18px 0;
  }
}

@media (max-width: 768px) {

  .gallery-view .title1 {
    text-align: center;
    font-size: 3rem;
  }

  .gallery-view .title2{
    text-align: center;
    font-size: 3rem;
  }

  .album .img {
    max-width: 32.5%;
    margin: 0 0 0 0;
  }

  .album .responsive-container-block.bg {
    flex-direction: column;
  }

  .album .responsive-container-block.img-cont {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  .album .img.img-big {
    max-width: 49%;
    margin: 0 0 0 0;
  }
}

@media (max-width: 500px) {
  .album .img {
    max-width: 94%;
    margin: 0 0 25px 0;
  }

  .album .responsive-container-block.img-cont {
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 10px 10px;
  }

  .album .img.img-big {
    max-width: 94%;
    margin: 0 0 25px 0;
  }

  .album .img.img-last {
    margin: 0 0 5px 0;
  }
}
</style>