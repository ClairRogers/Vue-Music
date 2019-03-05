import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    setResults(state, data) {
      state.results = data
    }
  },
  actions: {
    // searchApi({ commit, dispatch }, query) {
    //   _movieApi.get(query)
    //     .then(res => {
    //       let data = res.data.results
    //       commit('setResults', data)
    //     })
    // }
    getMusicByArtist({ commit, dispatch }, query) {
      var url = 'https://itunes.apple.com/search?callback=?&term=' + query;
      $.getJSON(url)
        .then(res => {
          commit('setResults', res.results)
        })
    }
  }
})
