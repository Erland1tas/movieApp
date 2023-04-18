import ContainerSlot from './slots/ContainerSlot.vue';

<template>
  <header class="the-header">
    <ContainerSlot>
      <div class="flexed-navigation">
        <div class="brand-name">
          <router-link :to="{ name: 'home-page' }"><h2>Supaflix</h2></router-link>
        </div>

        <form class="search-form" @submit.prevent="grabSearchValue">
          <input type="text" name="searchValue" placeholder="Search all movies.." />
          <button>Search</button>
        </form>

        <div class="willwatch-icon">
          <span class="material-icons"> playlist_play </span>
          <p>Watchlist</p>
        </div>
      </div>
    </ContainerSlot>
  </header>
</template>

<script>
import { useMovieStore } from '../../stores/movieStore.js'
export default {
  methods: {
    grabSearchValue(e) {
      // Gonna leave this one here, but in my opinion better when many inputs, because dont need to put v-model on every input.
      // EXPLANATION: new FormData() grabs the value from input name attribute and Object.fromEntries makes it an object {searchValue: 'someValueHere'}
      let { searchValue } = Object.fromEntries(new FormData(e.target))
      if (!searchValue) return
      useMovieStore().movieSearch(searchValue)
      this.$router.push({ name: 'result-page', params: { title: searchValue } })
    }
  }
}
</script>
