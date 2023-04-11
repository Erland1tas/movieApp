import ContainerSlot from './slots/ContainerSlot.vue';

<template>
  <header class="the-header">
    <ContainerSlot>
      <div class="flexed-navigation">
        <TheBrand />

        <div class="menu-icon">
          <span class="material-icons">menu</span>
          <p>Menu</p>
        </div>

        <div class="menu-container">
          <ContainerSlot>
            <div class="brand-and-close">
              <TheBrand />
              <span class="material-icons close"> close </span>
            </div>
            <div class="menu-links">
              <ul class="movies-only all-links">
                <li>Movies</li>
                <li><router-link to="/">Popular Movies</router-link></li>
                <li><router-link to="/">Top Rated Movies</router-link></li>
                <li><router-link to="/">Upcoming Movies</router-link></li>
                <li><router-link to="/">Now Playing Movies</router-link></li>
              </ul>
              <ul class="tvshows-only all-links">
                <li>TV Shows</li>
                <li><router-link to="/">Popular TV Shows</router-link></li>
                <li><router-link to="/">Top Rated TV Shows</router-link></li>
                <li><router-link to="/">Latest TV Shows</router-link></li>
                <li><router-link to="/">TV Shows On The Air Now</router-link></li>
              </ul>
              <ul class="famous-people all-links">
                <li>Famous People</li>
                <li><router-link to="/">Discover Famous People</router-link></li>
              </ul>
            </div>
          </ContainerSlot>
        </div>

        <form class="search-form" @submit.prevent="grabSearchValue">
          <input
            type="text"
            name="searchValue"
            placeholder="Search movies, TV shows and people.."
          />
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
export default {
  methods: {
    grabSearchValue(e) {
      // Gonna leave this one here, but in my opinion better when many inputs, because dont need to put v-model on every input.
      // EXPLANATION: new FormData() grabs the value from input name attribute and Object.fromEntries makes it an object {searchValue: 'someValueHere'}
      const { searchValue } = Object.fromEntries(new FormData(e.target))
      if (!searchValue) return
    }
  }
}
</script>
