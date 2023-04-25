import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movies', {
  state: () => ({
    moviesByTitle: [],
    loaded: true
  }),
  actions: {
    async movieSearch(searchValue) {
      const API_KEY = import.meta.env.VITE_API_KEY
      this.loaded = false
      this.moviesByTitle = []
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`
        )
        const data = await res.json()

        const that = this

        data.results.forEach(function (result) {
          const image = !result.poster_path
            ? '../../../img/no-image.webp'
            : `https://image.tmdb.org/t/p/w500${result.poster_path}`
          that.moviesByTitle.push({
            id: result.id,
            title: result.title,
            released: result.release_date,
            poster: image
          })
        })
        this.loaded = true
      } catch (err) {
        console.log(err)
      }
    }
  }
})
