<template>
  <div class="details col-12 col-md-5 offset-md-1">
    <div class="styling sticky">
      <h2 class="mb-3">{{song.trackName}}</h2>
      <h4>by {{song.artistName}}</h4>
      <img class="img-fluid" :src="song.artworkUrl60.replace(/60x60/g, '250x250')">
      <h5 class="mt-3">{{song.collectionName}}</h5>
      <h5><strong>${{song.collectionPrice}}</strong></h5>
      <audio class="w-75" controls :src="song.previewUrl" id="source"></audio>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    props: ['song']
  }
</script>

<style>
  .styling {
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

  .sticky {
    position: sticky;
    top: 8em;
  }
</style>