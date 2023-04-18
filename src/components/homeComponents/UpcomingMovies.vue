<template>
  <ContainerSlot>
    <section class="upcoming-section">
      <div class="selected-movie"></div>

      <div class="glide-upcoming">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides upcoming">
            <div class="glide__slide">
              <div class="cover"></div>
              <img src="../../assets/img/marvel.jpg" alt="" />
            </div>
            <div class="glide__slide">
              <div class="cover"></div>
              <img src="../../assets/img/marvel.jpg" alt="" />
            </div>
            <div class="glide__slide">
              <div class="cover"></div>
              <img src="../../assets/img/marvel.jpg" alt="" />
            </div>
            <div class="glide__slide">
              <div class="cover"></div>
              <img src="../../assets/img/marvel.jpg" alt="" />
            </div>
            <div class="glide__slide">
              <div class="cover"></div>
              <img src="../../assets/img/marvel.jpg" alt="" />
            </div>
            <div class="glide__slide">
              <div class="cover"></div>
              <img src="../../assets/img/marvel.jpg" alt="" />
            </div>
            <div class="glide__slide">
              <div class="cover"></div>
              <img src="../../assets/img/marvel.jpg" alt="" />
            </div>
            <div class="glide__slide">
              <div class="cover"></div>
              <img src="../../assets/img/marvel.jpg" alt="" />
            </div>
          </div>
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
          </div>
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
      perView: 4,
      gap: 20
    }).mount()
  }
}
</script>
