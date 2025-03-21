<script setup>
import Card from '@/widgets/card.vue';
import InteractiveButton from './InteractiveButton.vue';

</script>

<style>
.button-center {
  width: 100%; 
  height: 100%;
  display: flex;
  justify-content: center; 
  margin-top: 20px;
}

</style>


<template>
    <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Requisiti
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
        <div class="row">
          <Card title="Titolo 1" description="fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " immagine="src/images/s1.png"/>
          <Card title="Titolo 2" description="fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " immagine="src/images/s2.png"/>
          <Card title="Titolo 3" description="fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " immagine="src/images/s3.png"/>
        </div>
        <div class="button-center">
          <InteractiveButton text="Vedi tutto"/>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.service_section{
    background-color: #433194;
}
</style>
