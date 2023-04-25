<template>
  <container-slot>
    <the-loader v-if="!loaded"></the-loader>
    <MovieCards />
  </container-slot>
</template>

<script>
import MovieCards from '../components/searchedComponents/MovieCards.vue'
import { useMovieStore } from '../stores/movieStore.js'
export default {
  components: {
    MovieCards
  },
  computed: {
    loaded() {
      return useMovieStore().loaded
    }
  }
}
</script>
