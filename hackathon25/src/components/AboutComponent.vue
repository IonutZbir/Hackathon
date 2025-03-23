<script setup>
import CarouselView from "@/views/CarouselView.vue";
</script>
<template>
  <section class="about_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h1 class="roboto_font_500">
          INFO HACKATHON<span style="color: var(--action_color)">25</span>
        </h1>
      </div>
      <div class="row">
        <div class="col-3">
          <h2>Cos'è l'Hackathon</h2>
          <p>
            Questa competizione è destinata agli studenti del corso di laurea triennale in Informatica di Roma Tor
            Vergata e si svolgerà in formato a
            squadre, con un massimo di 4 partecipanti per team. L'evento inizierà nel pomeriggio di venerdì e terminerà
            il sabato mattina, dando ai partecipanti il tempo di impegnarsi intensamente nel risolvere le sfide.
          </p>
        </div>
        <div class="col-3">
          <h2>CFU D</h2>
          <p>
            Un aspetto interessante dell'Hackathon è che offre un'opportunità per ottenere Crediti Formativi
            Universitari (CFU). I CFU di tipo D sono crediti aggiuntivi per attività extra-curriculari, e per laurearsi
            sono necessari 9 CFU di questo tipo. Partecipando all'Hackathon, avrai la possibilità di guadagnarne uno. Un
            CFU corrisponde a 25 ore di impegno, e per ottenerlo dovrai partecipare per almeno 6 ore e risolvere 3
            problemi.</p>
        </div>
        <div class="col-3">
          <h2>Premi</h2>
          <p>
            I premi per i vincitori saranno suddivisi in base alla classifica (primo, secondo e terzo posto) e
            consisteranno in premi materiali, che verranno annunciati più avanti.
          </p>
        </div>
        <div class="col-3">
          <h2>Problemi</h2>
          <p>
            Durante l'Hackathon, affronterai una serie di problemi di algoritmici pensati per mettere alla prova le
            tue abilità logiche, algoritmiche e creative. I problemi saranno strutturati su diversi livelli di
            difficoltà, permettendo a tutti, dai studenti del primo anno agli studenti più anziani, di partecipare
            attivamente e trovare
            soluzioni innovative, migliorando le proprie competenze nel campo della programmazione e del problem solving.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style>

.about_section col-3 {
  height: 100%;
}
.about_section {
  background-color: white;
  color: var(--main_color);
}

.about_section .heading_container {
  margin-bottom: 45px;
}


.about_section .img-box img {
  max-width: 100%;
}

.about_section .detail-box h3 {
  font-weight: bold;
}

.about_section .detail-box p {
  margin-top: 15px;
}

/*IN CASO DI LINK*/
/* .about_section .detail-box a {
  display: inline-block;
  padding: 10px 45px;
  background-color: #00bbf0;
  color: #ffffff;
  border-radius: 0px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
  margin-top: 15px;
}

.about_section .detail-box a:hover {
  background-color: #007fa4;
} */
</style>
