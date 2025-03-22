<template>
  <section class="about_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Chi <span style="color: #3f8fda">Siamo</span></h2>
        <p>
          Magni quod blanditiis non minus sed aut voluptatum illum
          quisquam aspernatur ullam vel beatae rerum ipsum
          voluptatibus
        </p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img src="@/images/Lab25a.svg" alt="" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <h3>Siamo i ragazzi del laboratorio 25A</h3>
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration
              in some form, by injected humour, or randomised
              words which don't look even slightly believable. If
              you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <p>
              Molestiae odio earum non qui cumque provident
              voluptates, repellendus exercitationem, possimus at
              iste corrupti officiis unde alias eius ducimus
              reiciendis soluta eveniet. Nobis ullam ab omnis
              quasi expedita.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.about_section {
  background-color: white;
  color: var(--main_color);
}

.about_section .heading_container {
  margin-bottom: 45px;
}

.about_section .row {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
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
