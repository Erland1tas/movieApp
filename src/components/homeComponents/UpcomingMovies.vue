<template>
  <ContainerSlot>
    <section class="glide-upcoming">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides upcoming">
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <h2>Some Genre</h2>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <h2>Some Genre</h2>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <h2>Some Genre</h2>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <h2>Some Genre</h2>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <h2>Some Genre</h2>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <h2>Some Genre</h2>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <h2>Some Genre</h2>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <h2>Some Genre</h2>
          </router-link>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev movie</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next movie</button>
        </div>
      </div>
    </section>
  </ContainerSlot>
</template>
<script>
import Glide from '@glidejs/glide'
import ContainerSlot from '../slots/ContainerSlot.vue'
export default {
  components: { ContainerSlot },
  mounted() {
    new Glide('.glide-upcoming', {
      type: 'carousel',
      perView: 1,
      autoplay: 6000,
      animationDuration: 1500
    }).mount()
  }
}
</script>
