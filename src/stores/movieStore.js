import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movies', {
  state: () => ({
    moviesByTitle: []
  }),
  actions: {
    async movieSearch(searchValue) {
      const API_KEY = import.meta.env.VITE_API_KEY
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`
        )
        const data = await res.json()
        const posterPath = []
        const that = this
        data.results.forEach(function (result) {
          that.moviesByTitle.push({
            id: result.id,
            title: result.title,
            released: result.release_date,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`
          })
        })
        console.log(this.moviesByTitle)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
