<script setup>
import { getYear } from '../../js/utils';
import { onMounted } from 'vue';
onMounted(() => { getYear(); })
</script>

<template>
    <footer class="footer">
        <section class="info_section layout_padding2">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 info_col">
                        <div class="info_contact">
                            <h4>
                                Dove Siamo
                            </h4>
                            <div class="contact_link_box">
                                <a href="https://maps.app.goo.gl/jzNcyCVQ26YXV8a99">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                    <span>
                                        Macroarea di Scienze MM.FF.NN Roma Tor Vergata
                                    </span>
                                </a>
                                <h4>
                                    Contatti
                                </h4>
                                <a href="mailto:info.lab25a@gmail.com">
                                    <font-awesome-icon icon="fa fa-envelope" />
                                    <span>
                                        info.lab25a@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="info_social">
                            <a href="https://www.instagram.com/lab.25a.uniroma2/">
                                <font-awesome-icon icon="fab fa-instagram" />
                            </a>
                            <a href="https://github.com/Lab25A-CS">
                                <font-awesome-icon icon="fab fa-github" />
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 info_col">
                        <div class="info_detail">
                            <h4>
                                Organizzatori
                            </h4>
                            <div class="info_links">
                                <div class="org_social">
                                    <span>Giorgia Pazienza</span>
                                    <a href="https://www.instagram.com/giorgiapazienza_" target="_blank">
                                        <font-awesome-icon icon="fab fa-instagram" />
                                    </a>
                                    <a href="">
                                        <font-awesome-icon icon="fab fa-github" />
                                    </a>
                                </div>
                                <div class="org_social">
                                    <span>Davide Noce</span>
                                    <a href="https://www.instagram.com/davide.nox" target="_blank">
                                        <font-awesome-icon icon="fab fa-instagram" />
                                    </a>
                                    <a href="https://github.com/davidenox" target="_blank">
                                        <font-awesome-icon icon="fab fa-github" />
                                    </a>
                                </div>
                                <div class="org_social">
                                    <span>Francesco Cosciotti</span>
                                    <a href="https://www.instagram.com/why_must_i_be_sad" target="_blank">
                                        <font-awesome-icon icon="fab fa-instagram" />
                                    </a>
                                    <a href="https://github.com/Gjiha" target="_blank">
                                        <font-awesome-icon icon="fab fa-github" />
                                    </a>
                                </div>
                                <div class="org_social">
                                    <span>Mirco Pasquali</span>
                                    <a href="">
                                        <font-awesome-icon icon="fab fa-instagram" />
                                    </a>
                                    <a href="https://github.com/mirco0" target="_blank">
                                        <font-awesome-icon icon="fab fa-github" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 info_col">
                        <div class="info_detail">
                            <h4>
                                Collaboratori
                            </h4>
                            <div class="info_links">
                                <div class="org_social">
                                    <span>Prof. Francesco Pasquale</span>
                                    <a href="mailto:pasquale@mat.uniroma2.it" target="_blank">
                                        <font-awesome-icon icon="fa fa-envelope" />
                                    </a>
                                    <a href="https://www.mat.uniroma2.it/~pasquale/" target="_blank">
                                        <font-awesome-icon icon="fa fa-globe" />
                                    </a>
                                </div>
                                <div class="org_social">
                                    <span>Prof. Fabio Massimo Zanzzoto</span>
                                    <a href="mailto:fabio.massimo.zanzotto@uniroma2.it" target="_blank">
                                        <font-awesome-icon icon="fa fa-envelope" />
                                    </a>
                                    <a href="https://art.uniroma2.it/zanzotto/" target="_blank">
                                        <font-awesome-icon icon="fa fa-globe" />
                                    </a>
                                </div>
                                <div class="org_social">
                                    <span>Franco Salvucci</span>
                                    <a href="https://www.instagram.com/franco.salvucci.9" target="_blank">
                                        <font-awesome-icon icon="fab fa-instagram" />
                                    </a>
                                    <a href="https://github.com/francosalvucci14" target="_blank">
                                        <font-awesome-icon icon="fab fa-github" />
                                    </a>
                                </div>
                                <div class="org_social">
                                    <span>Ionut Zbirciog</span>
                                    <a href="">
                                        <font-awesome-icon icon="fab fa-instagram" />
                                    </a>
                                    <a href="https://github.com/IonutZbir" target="_blank">
                                        <font-awesome-icon icon="fab fa-github" />
                                    </a>
                                </div>
                                <div class="org_social">
                                    <span>Francesco Compagnone</span>
                                    <a href="">
                                        <font-awesome-icon icon="fab fa-instagram" />
                                    </a>
                                    <a href="" target="_blank">
                                        <font-awesome-icon icon="fab fa-github" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 info_col">
                        <div class="info_detail">
                            <h4>
                                Sponsor
                            </h4>
                            <div class="info_links">
                                <a href="index.html">
                                    <!-- Redbull -->
                                </a>
                                <a class="" href="about.html">
                                    <!-- BOH -->
                                </a>
                                <a class="" href="service.html">
                                    <!-- BOH -->
                                </a>
                                <a class="" href="why.html">
                                    <!-- BOH -->
                                </a>
                                <a class="" href="team.html">
                                    <!-- BOH -->
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="copyright_section">
            <div class="container">
                <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved By
                    <a href="https://www.instagram.com/lab.25a.uniroma2/">Lab25A</a>
                </p>
            </div>
        </section>
    </footer>
</template>

<style>

.footer span {
    width: 100%;
}

.org_social {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
    width: 80%;
}


.info_section {
    background-color: var(--second_color);
    color: #ffffff;
    padding: 45px 0 15px 0;
}

.info_section h4 {
    font-weight: 600;
    margin-bottom: 20px;
}

.info_section .info_col {
    margin-bottom: 30px;
}

.info_section .info_contact .contact_link_box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

.info_section .info_contact .contact_link_box a {
    margin: 5px 0;
    color: #ffffff;
}

.info_section .info_contact .contact_link_box a i {
    margin-right: 5px;
}

.info_section .info_contact .contact_link_box a:hover {
    color: #00bbf0;
}

.info_section .info_social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
}

.info_section .info_social a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #ffffff;
    border-radius: 100%;
    margin-right: 10px;
    font-size: 24px;
}

.info_section .info_social a:hover {
    color: var(--action_color);
}

.info_section .info_links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.info_section .info_links a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    /* margin-bottom: 15px; */
    color: #ffffff;
}

.info_section .info_links a:hover {
    color: var(--action_color);
}

.copyright_section {
    position: relative;
    background-color: var(--second_color);
    text-align: center;
}

.copyright_section p {
    color: white;
    padding: 25px 0;
    margin: 0;
}

.copyright_section p a {
    color: inherit;
}
</style>