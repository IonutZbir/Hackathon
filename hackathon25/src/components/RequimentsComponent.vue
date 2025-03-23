<script setup>
import Card from '@/widgets/Card.vue';
import InteractiveButton from './InteractiveButton.vue';

</script>

<style>
.requiments_section h2,
.requiments_section #requiremets-text {
  color: #ffffff;
}

.button-center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

<template>
  <section class="requiments_section layout_padding">
    <div class="requiments_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Requisiti
          </h2>
          <p id="requiremets-text">
            Come tutti gli anni, sono richieste delle minime compentenze per essere in grado di competere.
          </p>
        </div>
        <div class="row">
          <Card title="Python"
            description="Per partecipare all'Hackathon è richiesta una conoscenza di base di Python. Questo requisito è alla portata di tutti, dato che nel primo semestre avete seguito il corso di programmazione."
            immagine="src/images/python-logo-only.svg" more-desc="How To Python" more-link="https://www.python.org//" />
          <Card title="Programmazione Web"
            description="Per affrontare le sfide dell'Hackathon, è utile avere una conoscenza di base della programmazione web. Comprendere l'HTML, il CSS e il JavaScript ti permetterà di sviluppare soluzioni interattive e dinamiche."
            immagine="" />
          <Card title="Capacità di Problem Solving"
            description="Il problem solving è una competenza fondamentale per ogni sviluppatore. Durante l'Hackathon, dovrai analizzare problemi complessi, trovare soluzioni efficienti e implementarle nel modo più ottimale possibile."
            immagine="" />
        </div>
        <div class="button-center">
          <InteractiveButton text="Vedi tutto" />
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.requiments_section {
  background: var(--gradiente);
  position: relative;
}

.requiments_section .box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  margin-top: 45px;
  background-color: #f8f8f9;
  padding: 20px;
  border-radius: 5px;
}

.requiments_section .box .img-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 125px;
  min-width: 75px;
  height: 75px;
  margin-bottom: 15px;
}

.requiments_section .box .img-box img {
  max-width: 100%;
  max-height: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.requiments_section .box .detail-box h5 {
  font-weight: bold;
  text-transform: uppercase;
}

.requiments_section .box .detail-box a {
  color: #00204a;
  font-weight: 600;
}

.requiments_section .box .detail-box a:hover {
  color: #00bbf0;
}
</style>
