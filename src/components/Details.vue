<template>
  <div class="details col-6 offset-1 yellow">
    <h3 class="mb-3">{{song.trackName}}</h3>
    <p>{{song.artistName}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    props: ['song']
  }
</script>

<style>

</style>