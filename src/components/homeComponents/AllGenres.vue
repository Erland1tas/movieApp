<template>
  <container-slot>
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
  </container-slot>
</template>
<script>
import Glide from '@glidejs/glide'
export default {
  mounted() {
    new Glide('.genres-glide', {
      type: 'carousel',
      gap: 20,
      perView: 5,
      peek: 10
    }).mount()
  }
}
</script>
