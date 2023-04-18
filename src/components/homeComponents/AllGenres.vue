<template>
  <ContainerSlot>
    <section class="genres-glide">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides genres">
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <p>Some Genre</p>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <p>Some Genre</p>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <p>Some Genre</p>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <p>Some Genre</p>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <p>Some Genre</p>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <p>Some Genre</p>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <p>Some Genre</p>
          </router-link>
          <router-link class="glide__slide" to="/">
            <div class="cover"></div>
            <img src="../../assets/img/marvel.jpg" alt="" />
            <p>Some Genre</p>
          </router-link>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
      </div>
    </section>
  </ContainerSlot>
</template>
<script>
import Glide from '@glidejs/glide'
import ContainerSlot from '../slots/ContainerSlot.vue'
export default {
  mounted() {
    new Glide('.genres-glide', {
      type: 'carousel',
      gap: 20,
      perView: 5,
      peek: 10
    }).mount()
  },
  components: { ContainerSlot }
}
</script>
