<script setup>
import InteractiveButton from './InteractiveButton.vue';

</script>

<template>
	<section class="slider_section">
		<div id="customCarousel1" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<div class="detail-box">
									<h1>
										<p id="H">H</p>
										<p id="A">A</p>
										<p id="C">C</p>
										<p id="K">K</p>
										<p id="A1">A</p>
										<p id="T">T</p>
										<p id="H1">H</p>
										<p id="O">O</p>
										<p id="N">N</p>
										<p id="L25">25</p>
									</h1>
                                    <p class="power">Powered By Lab25A</p>
									<p>
										Explicabo esse amet tempora quibusdam
										laudantium, laborum eaque magnam fugiat
										hic? Esse dicta aliquid error
										repudiandae earum suscipit fugiat
										molestias, veniam, vel architecto
										veritatis delectus repellat modi impedit
										sequi.
									</p>
									<InteractiveButton text="ISCRIVITI"/>
								</div>
							</div>
							<div class="col-md-6">
								<div class="img-box">
									<img src="@/images/slider-img.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
