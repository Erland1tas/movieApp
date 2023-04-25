<template>
  <section class="movie-cards">
    <div class="card" v-for="movie in moviesByTitle" :key="movie.id">
      <router-link to="/">
        <div class="poster">
          <img :src="movie.poster" alt="" />
        </div>
        <div class="movie-details">
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.released }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import { useMovieStore } from '../../stores/movieStore.js'
export default {
  computed: {
    moviesByTitle() {
      return useMovieStore().moviesByTitle
    }
  }
}
</script>
