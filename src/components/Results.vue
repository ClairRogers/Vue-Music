<template>
  <div class="results row">
    <div class="col-4 yellow">
      <h3 class="mt-2">Results:</h3>
      <ul class="text-left">
        <li v-for="song in results" @click="setActiveSong(song)">{{song.trackName}} by {{song.artistName}}</li>
      </ul>
    </div>
    <details-view :song="activeSong"></details-view>
  </div>
</template>

<script>
  import DetailsView from '@/components/Details.vue'
  export default {
    name: 'Results',
    data() {
      return {
        activeSong: {}
      }
    },
    computed: {
      results() {
        return this.$store.state.results
      }
    },
    methods: {
      setActiveSong(song) {
        this.activeSong = song
      }
    },
    components: {
      DetailsView
    }
  }
</script>

<style>
  .yellow {
    padding: 25px;
    background-color: #de0913;
    color: white;
    text-shadow: 0 0 5px black;
    /* text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000; */
  }
</style>