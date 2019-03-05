<template>
  <div class="results row">
    <div class="col-12 col-md-4 offset-md-1 yellow" v-if="results.length > 0">
      <h3 class="mt-2">Results:</h3>
      <div class="text-left resultsbox">
        <p v-for="song in results" @click="setActiveSong(song)"><img
            :src="song.artworkUrl60.replace(/60x60/g, '30x30')"> &nbsp;&nbsp;<i>{{song.trackName}}</i> by
          {{song.artistName}}</p>
      </div>
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
    background-color: #eed891;
    color: black;
    text-shadow: 0 0 5px white;
    /* text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000; */
  }

  .resultsbox {
    height: 60vh;
    overflow-y: auto;
  }

  p:hover {
    cursor: pointer;
  }
</style>