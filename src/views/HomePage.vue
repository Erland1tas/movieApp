<template>
  <UpcomingMovies />
  <AllGenres />
  <TrendingMovies />
</template>

<script>
import UpcomingMovies from '../components/homeComponents/UpcomingMovies.vue'
import AllGenres from '../components/homeComponents/AllGenres.vue'
import TrendingMovies from '../components/homeComponents/TrendingMovies.vue'
export default {
  components: {
    UpcomingMovies,
    AllGenres,
    TrendingMovies
  }
}
</script>
