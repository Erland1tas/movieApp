<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import HomePage from './views/HomePage.vue'
import SearchedPage from './views/SearchedPage.vue'
export default {
  components: {
    HomePage,
    SearchedPage
  }
}
</script>
