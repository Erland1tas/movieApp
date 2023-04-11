<template>
  <section class="trending-section">
    <ContainerSlot>
      <h3 class="trending-header">Trending Movies</h3>
      <section class="trending-glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div class="glide__slide movie">
              <router-link to="/">
                <img src="../../assets/img/marvel.jpg" alt="" />
              </router-link>
              <div class="movie-desc">
                <router-link to="/"> Cia kazkoks filmo pavadinimas Cia kazkoks</router-link>
              </div>
            </div>

            <div class="glide__slide movie">
              <router-link to="/">
                <img src="../../assets/img/marvel.jpg" alt="" />
              </router-link>
              <div class="movie-desc">
                <router-link to="/">
                  Cia kazkoks filmo pavadinimas Cia kazkoks filmo pavadinimas</router-link
                >
              </div>
            </div>

            <div class="glide__slide movie">
              <router-link to="/">
                <img src="../../assets/img/marvel.jpg" alt="" />
              </router-link>
              <div class="movie-desc">
                <router-link to="/">
                  Cia kazkoks filmo pavadinimas Cia kazkoks filmo pavadinimas Cia kazkoks filmo
                  pavadinimas</router-link
                >
              </div>
            </div>

            <div class="glide__slide movie">
              <router-link to="/">
                <img src="../../assets/img/marvel.jpg" alt="" />
              </router-link>
              <div class="movie-desc">
                <router-link to="/"> Cia kazkoks filmo pavadinimas </router-link>
              </div>
            </div>

            <div class="glide__slide movie">
              <router-link to="/">
                <img src="../../assets/img/marvel.jpg" alt="" />
              </router-link>
              <div class="movie-desc">
                <router-link to="/"> Cia kazkoks filmo pavadinimas </router-link>
              </div>
            </div>

            <div class="glide__slide movie">
              <router-link to="/">
                <img src="../../assets/img/marvel.jpg" alt="" />
              </router-link>
              <div class="movie-desc">
                <router-link to="/">
                  Cia kazkoks filmo pavadinimas Cia kazkoks filmo pavadinimas</router-link
                >
              </div>
            </div>

            <div class="glide__slide movie">
              <router-link to="/">
                <img src="../../assets/img/marvel.jpg" alt="" />
              </router-link>
              <div class="movie-desc">
                <router-link to="/">
                  Cia kazkoks filmo pavadinimas Cia kazkoks filmo pavadinimasCia kazkoks filmo
                  pavadinimas</router-link
                >
              </div>
            </div>

            <div class="glide__slide movie">
              <router-link to="/">
                <img src="../../assets/img/marvel.jpg" alt="" />
              </router-link>
              <div class="movie-desc">
                <router-link to="/"> Cia kazkoks filmo pavadinimas </router-link>
              </div>
            </div>
          </div>
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
          </div>
        </div>
      </section>
    </ContainerSlot>
  </section>
</template>

<script>
import Glide from '@glidejs/glide'
export default {
  mounted() {
    new Glide('.trending-glide', {
      type: 'carousel',
      gap: 20,
      perView: 5,
      peek: 20
    }).mount()
  }
}
</script>
