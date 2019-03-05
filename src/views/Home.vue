<template>
  <div class="home pt-3 container-fluid">
    <form @submit.prevent="search" class="mb-3">
      <input type="text" placeholder="search by title" v-model="query" required>
      <button class="btn btn-light btn-sm ml-1" type="submit">Search</button>
    </form>
    <results>

    </results>
  </div>
</template>


<script>
  import Results from '@/components/Results.vue'

  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      results() {
        return movies
      }
    },
    methods: {
      search() {
        this.$store.dispatch('getMusicByArtist', this.query)
      }
    },
    components: {
      Results
    }
  }
</script>


<style>
  .home {
    background-color: #ab060f;
  }
</style>