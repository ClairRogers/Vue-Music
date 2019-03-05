<template>
  <div class="home container-fluid text-center">
    <div class="navbar row">
      <div class="col-12">
        <h1 class="text-black">TuneVue</h1>
        <form @submit.prevent="search" class="mb-3 form-horizontal">
          <div class="input-group w-50">
            <input type="text" class="form-control" placeholder="search by song or artist" v-model="query" required>
            <button class="btn btn-dark btn-sm ml-1" type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
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
    background-color: #e7b615;
    height: 100vh;
  }

  .navbar {
    background-color: #e7b615;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .form-horizontal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>